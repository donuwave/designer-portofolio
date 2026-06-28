'use client';

import { useMemo, useState } from 'react';
import { Alert, Button, Input, Select } from 'antd';

import type {
  IService,
  IServiceCaseStudyBlock,
  IServiceCtaBlock,
  IServiceMediaClusterBlock,
  IServiceMediaItem,
  IServicesContent,
  IServiceTextCardBlock,
  IServiceTextCardBulletGroup,
} from '@/shared/lib/content/services';

import {
  SArrayStack,
  SBlockCard,
  SBlockHeader,
  SBlockStack,
  SBlockTitle,
  SCompactControl,
  SEditor,
  SFieldGrid,
  SFieldLabel,
  SHeader,
  SHeaderActions,
  SInlineActions,
  SLayout,
  SMuted,
  SPage,
  SPanel,
  SPanelHeader,
  SPanelTitle,
  SSection,
  SSectionHeader,
  SSectionTitle,
  SServiceList,
  SSidebar,
  SSplitFields,
  SSubsection,
  SSubsectionHeader,
  SSubsectionTitle,
  SSubtitle,
  STitle,
  STitleGroup,
} from './adminServicesEditor.styles';

const { TextArea } = Input;

type NoticeState = {
  type: 'success' | 'error';
  message: string;
};

const moveItem = <T,>(items: T[], index: number, direction: -1 | 1) => {
  const targetIndex = index + direction;

  if (targetIndex < 0 || targetIndex >= items.length) {
    return items;
  }

  const nextItems = [...items];
  const [movedItem] = nextItems.splice(index, 1);
  nextItems.splice(targetIndex, 0, movedItem);

  return nextItems;
};

const createTextCardBlock = (): IServiceTextCardBlock => ({
  type: 'text-card',
  title: 'Новый текстовый блок',
  paragraphs: [],
  bullets: [],
});

const createMediaClusterBlock = (): IServiceMediaClusterBlock => ({
  type: 'media-cluster',
  layout: 'feature-left',
  items: [
    {
      src: '',
      alt: '',
    },
  ],
});

const createCtaBlock = (): IServiceCtaBlock => ({
  type: 'cta',
  label: 'Написать мне',
  href: '#contacts',
});

const createBulletGroup = (): IServiceTextCardBulletGroup => ({
  text: '',
  list: [''],
});

const createMediaItem = (): IServiceMediaItem => ({
  src: '',
  alt: '',
});

const createServiceId = (services: IService[]) => {
  let nextIndex = services.length + 1;
  let candidate = `service-${nextIndex}`;

  while (services.some((service) => service.id === candidate)) {
    nextIndex += 1;
    candidate = `service-${nextIndex}`;
  }

  return candidate;
};

const createService = (services: IService[]): IService => ({
  id: createServiceId(services),
  title: 'Новый сервис',
  description: '',
  coverImage: '',
  caseStudy: {
    blocks: [],
  },
});

interface IAdminServicesEditorProps {
  initialContent: IServicesContent;
}

export const AdminServicesEditor = ({ initialContent }: IAdminServicesEditorProps) => {
  const [content, setContent] = useState(initialContent);
  const [selectedServiceId, setSelectedServiceId] = useState(initialContent.services[0]?.id ?? '');
  const [notice, setNotice] = useState<NoticeState | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const selectedServiceIndex = content.services.findIndex(
    (service) => service.id === selectedServiceId
  );
  const selectedService = selectedServiceIndex >= 0 ? content.services[selectedServiceIndex] : null;

  const serviceOptions = useMemo(
    () =>
      content.services.map((service) => ({
        label: service.title || service.id,
        value: service.id,
      })),
    [content.services]
  );

  const updateContent = (updater: (draft: IServicesContent) => void) => {
    setContent((currentContent) => {
      const nextContent = structuredClone(currentContent);
      updater(nextContent);

      return nextContent;
    });
    setNotice(null);
  };

  const ensureSelectedService = () => {
    if (selectedService) {
      return selectedService;
    }

    return null;
  };

  const updateSelectedService = (updater: (service: IService) => void) => {
    updateContent((draft) => {
      const service = draft.services.find((item) => item.id === selectedServiceId);

      if (!service) {
        return;
      }

      service.caseStudy ??= { blocks: [] };
      updater(service);
    });
  };

  const addService = () => {
    const nextService = createService(content.services);

    updateContent((draft) => {
      draft.services.push(nextService);
    });
    setSelectedServiceId(nextService.id);
  };

  const removeSelectedService = () => {
    const service = ensureSelectedService();

    if (!service || !window.confirm(`Удалить сервис "${service.title || service.id}"?`)) {
      return;
    }

    const nextServices = content.services.filter((item) => item.id !== selectedServiceId);
    const nextSelectedService = nextServices[Math.max(0, selectedServiceIndex - 1)];

    updateContent((draft) => {
      draft.services = nextServices;
    });
    setSelectedServiceId(nextSelectedService?.id ?? '');
  };

  const moveSelectedService = (direction: -1 | 1) => {
    updateContent((draft) => {
      draft.services = moveItem(draft.services, selectedServiceIndex, direction);
    });
  };

  const addBlock = (type: IServiceCaseStudyBlock['type']) => {
    updateSelectedService((service) => {
      if (type === 'text-card') {
        service.caseStudy?.blocks.push(createTextCardBlock());
        return;
      }

      if (type === 'media-cluster') {
        service.caseStudy?.blocks.push(createMediaClusterBlock());
        return;
      }

      service.caseStudy?.blocks.push(createCtaBlock());
    });
  };

  const updateBlock = (blockIndex: number, updater: (block: IServiceCaseStudyBlock) => void) => {
    updateSelectedService((service) => {
      const block = service.caseStudy?.blocks[blockIndex];

      if (!block) {
        return;
      }

      updater(block);
    });
  };

  const removeBlock = (blockIndex: number) => {
    updateSelectedService((service) => {
      service.caseStudy!.blocks.splice(blockIndex, 1);
    });
  };

  const moveBlock = (blockIndex: number, direction: -1 | 1) => {
    updateSelectedService((service) => {
      service.caseStudy!.blocks = moveItem(service.caseStudy!.blocks, blockIndex, direction);
    });
  };

  const saveContent = async () => {
    setIsSaving(true);
    setNotice(null);

    try {
      const response = await fetch('/api/admin/services', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(content),
      });

      const payload = (await response.json().catch(() => null)) as
        | ({ message?: string } & IServicesContent)
        | null;

      if (!response.ok) {
        setNotice({
          type: 'error',
          message: payload?.message ?? 'Не удалось сохранить изменения',
        });
        return;
      }

      if (payload && 'services' in payload) {
        setContent(payload);
      }

      setNotice({
        type: 'success',
        message: 'services.json сохранен',
      });
    } catch {
      setNotice({
        type: 'error',
        message: 'Не удалось сохранить изменения',
      });
    } finally {
      setIsSaving(false);
    }
  };

  const logout = async () => {
    setIsLoggingOut(true);

    try {
      await fetch('/api/admin/login', {
        method: 'DELETE',
      });

      window.location.href = '/admin/login';
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <SPage>
      <SHeader>
        <STitleGroup>
          <STitle>Редактор сервисов</STitle>
          <SSubtitle>Источник данных: public/content/services.json.</SSubtitle>
        </STitleGroup>

        <SHeaderActions>
          <Button size="small" onClick={logout} loading={isLoggingOut}>
            Выйти
          </Button>
          <Button size="small" onClick={saveContent} loading={isSaving}>
            Сохранить
          </Button>
        </SHeaderActions>
      </SHeader>

      {notice && (
        <Alert
          style={{ position: 'absolute' }}
          type={notice.type}
          showIcon
          message={notice.message}
          closable
        />
      )}

      <SLayout>
        <SSidebar>
          <SPanel>
            <SPanelHeader>
              <SPanelTitle>Сервисы</SPanelTitle>
              <Button onClick={addService}>Добавить</Button>
            </SPanelHeader>

            {serviceOptions.length > 0 ? (
              <Select
                value={selectedServiceId}
                options={serviceOptions}
                onChange={setSelectedServiceId}
                size="large"
              />
            ) : (
              <SMuted>Сервисов пока нет.</SMuted>
            )}
          </SPanel>
        </SSidebar>

        <SEditor>
          {selectedService ? (
            <>
              <SSection>
                <SSectionHeader>
                  <SSectionTitle>Основное</SSectionTitle>

                  <SInlineActions>
                    <Button
                      onClick={() => moveSelectedService(-1)}
                      disabled={selectedServiceIndex <= 0}
                    >
                      Выше
                    </Button>
                    <Button
                      onClick={() => moveSelectedService(1)}
                      disabled={selectedServiceIndex === content.services.length - 1}
                    >
                      Ниже
                    </Button>
                    <Button danger onClick={removeSelectedService}>
                      Удалить сервис
                    </Button>
                    <Button type="default" href={`/service/${selectedService.id}`} target="_blank">
                      Открыть сервис
                    </Button>
                  </SInlineActions>
                </SSectionHeader>

                <SFieldGrid>
                  <SFieldLabel>
                    ID
                    <Input
                      size="large"
                      value={selectedService.id}
                      onChange={(event) => {
                        const nextId = event.target.value;

                        setSelectedServiceId(nextId);

                        updateSelectedService((service) => {
                          service.id = nextId;
                        });
                      }}
                    />
                  </SFieldLabel>

                  <SFieldLabel>
                    Title
                    <Input
                      size="large"
                      value={selectedService.title}
                      onChange={(event) =>
                        updateSelectedService((service) => {
                          service.title = event.target.value;
                        })
                      }
                    />
                  </SFieldLabel>

                  <SFieldLabel>
                    Description
                    <TextArea
                      rows={4}
                      value={selectedService.description}
                      onChange={(event) =>
                        updateSelectedService((service) => {
                          service.description = event.target.value;
                        })
                      }
                    />
                  </SFieldLabel>

                  <SFieldLabel>
                    Cover image
                    <Input
                      size="large"
                      value={selectedService.coverImage}
                      onChange={(event) =>
                        updateSelectedService((service) => {
                          service.coverImage = event.target.value;
                        })
                      }
                    />
                  </SFieldLabel>
                </SFieldGrid>
              </SSection>

              <SSection>
                <SSectionHeader>
                  <SSectionTitle>Case study blocks</SSectionTitle>

                  <SInlineActions>
                    <Button onClick={() => addBlock('text-card')}>Text card</Button>
                    <Button onClick={() => addBlock('media-cluster')}>Media cluster</Button>
                    <Button onClick={() => addBlock('cta')}>CTA</Button>
                  </SInlineActions>
                </SSectionHeader>

                <SBlockStack>
                  {selectedService.caseStudy?.blocks.length ? (
                    selectedService.caseStudy.blocks.map((block, blockIndex) => (
                      <SBlockCard key={`${block.type}-${blockIndex}`}>
                        <SBlockHeader>
                          <SBlockTitle>{block.type}</SBlockTitle>

                          <SInlineActions>
                            <Button
                              onClick={() => moveBlock(blockIndex, -1)}
                              disabled={blockIndex === 0}
                            >
                              Выше
                            </Button>
                            <Button
                              onClick={() => moveBlock(blockIndex, 1)}
                              disabled={blockIndex === selectedService.caseStudy!.blocks.length - 1}
                            >
                              Ниже
                            </Button>
                            <Button danger onClick={() => removeBlock(blockIndex)}>
                              Удалить
                            </Button>
                          </SInlineActions>
                        </SBlockHeader>

                        {block.type === 'text-card' && (
                          <SFieldGrid>
                            <SFieldLabel>
                              Title
                              <Input
                                size="large"
                                value={block.title}
                                onChange={(event) =>
                                  updateBlock(blockIndex, (draftBlock) => {
                                    (draftBlock as IServiceTextCardBlock).title =
                                      event.target.value;
                                  })
                                }
                              />
                            </SFieldLabel>

                            <SSubsection>
                              <SSubsectionHeader>
                                <SSubsectionTitle>Paragraphs</SSubsectionTitle>
                                <Button
                                  onClick={() =>
                                    updateBlock(blockIndex, (draftBlock) => {
                                      const textBlock = draftBlock as IServiceTextCardBlock;
                                      textBlock.paragraphs ??= [];
                                      textBlock.paragraphs.push('');
                                    })
                                  }
                                >
                                  Добавить paragraph
                                </Button>
                              </SSubsectionHeader>

                              <SArrayStack>
                                {block.paragraphs?.length ? (
                                  block.paragraphs.map((paragraph, paragraphIndex) => (
                                    <SSubsection key={`paragraph-${paragraphIndex}`}>
                                      <SSubsectionHeader>
                                        <SSubsectionTitle>
                                          Paragraph {paragraphIndex + 1}
                                        </SSubsectionTitle>
                                        <Button
                                          danger
                                          onClick={() =>
                                            updateBlock(blockIndex, (draftBlock) => {
                                              const textBlock = draftBlock as IServiceTextCardBlock;
                                              textBlock.paragraphs?.splice(paragraphIndex, 1);
                                            })
                                          }
                                        >
                                          Удалить
                                        </Button>
                                      </SSubsectionHeader>

                                      <TextArea
                                        rows={3}
                                        value={paragraph}
                                        onChange={(event) =>
                                          updateBlock(blockIndex, (draftBlock) => {
                                            const textBlock = draftBlock as IServiceTextCardBlock;
                                            textBlock.paragraphs![paragraphIndex] =
                                              event.target.value;
                                          })
                                        }
                                      />
                                    </SSubsection>
                                  ))
                                ) : (
                                  <SMuted>Параграфов пока нет.</SMuted>
                                )}
                              </SArrayStack>
                            </SSubsection>

                            <SSubsection>
                              <SSubsectionHeader>
                                <SSubsectionTitle>Bullet groups</SSubsectionTitle>
                                <Button
                                  onClick={() =>
                                    updateBlock(blockIndex, (draftBlock) => {
                                      const textBlock = draftBlock as IServiceTextCardBlock;
                                      textBlock.bullets ??= [];
                                      textBlock.bullets.push(createBulletGroup());
                                    })
                                  }
                                >
                                  Добавить bullets group
                                </Button>
                              </SSubsectionHeader>

                              <SArrayStack>
                                {block.bullets?.length ? (
                                  block.bullets.map((bulletGroup, bulletGroupIndex) => (
                                    <SSubsection key={`bullet-group-${bulletGroupIndex}`}>
                                      <SSubsectionHeader>
                                        <SSubsectionTitle>
                                          Group {bulletGroupIndex + 1}
                                        </SSubsectionTitle>
                                        <Button
                                          danger
                                          onClick={() =>
                                            updateBlock(blockIndex, (draftBlock) => {
                                              const textBlock = draftBlock as IServiceTextCardBlock;
                                              textBlock.bullets?.splice(bulletGroupIndex, 1);
                                            })
                                          }
                                        >
                                          Удалить группу
                                        </Button>
                                      </SSubsectionHeader>

                                      <SFieldLabel>
                                        Text
                                        <TextArea
                                          rows={2}
                                          value={bulletGroup.text ?? ''}
                                          onChange={(event) =>
                                            updateBlock(blockIndex, (draftBlock) => {
                                              const textBlock = draftBlock as IServiceTextCardBlock;
                                              const currentGroup =
                                                textBlock.bullets![bulletGroupIndex];
                                              currentGroup.text = event.target.value;
                                            })
                                          }
                                        />
                                      </SFieldLabel>

                                      <SSubsection>
                                        <SSubsectionHeader>
                                          <SSubsectionTitle>List items</SSubsectionTitle>
                                          <Button
                                            onClick={() =>
                                              updateBlock(blockIndex, (draftBlock) => {
                                                const textBlock =
                                                  draftBlock as IServiceTextCardBlock;
                                                textBlock.bullets![bulletGroupIndex].list.push('');
                                              })
                                            }
                                          >
                                            Добавить item
                                          </Button>
                                        </SSubsectionHeader>

                                        <SArrayStack>
                                          {bulletGroup.list.map((item, itemIndex) => (
                                            <SSplitFields key={`bullet-item-${itemIndex}`}>
                                              <Input
                                                size="large"
                                                value={item}
                                                onChange={(event) =>
                                                  updateBlock(blockIndex, (draftBlock) => {
                                                    const textBlock =
                                                      draftBlock as IServiceTextCardBlock;
                                                    textBlock.bullets![bulletGroupIndex].list[
                                                      itemIndex
                                                    ] = event.target.value;
                                                  })
                                                }
                                              />
                                              <Button
                                                danger
                                                onClick={() =>
                                                  updateBlock(blockIndex, (draftBlock) => {
                                                    const textBlock =
                                                      draftBlock as IServiceTextCardBlock;
                                                    textBlock.bullets![
                                                      bulletGroupIndex
                                                    ].list.splice(itemIndex, 1);
                                                  })
                                                }
                                              >
                                                Удалить
                                              </Button>
                                            </SSplitFields>
                                          ))}
                                        </SArrayStack>
                                      </SSubsection>
                                    </SSubsection>
                                  ))
                                ) : (
                                  <SMuted>Групп буллетов пока нет.</SMuted>
                                )}
                              </SArrayStack>
                            </SSubsection>
                          </SFieldGrid>
                        )}

                        {block.type === 'media-cluster' && (
                          <SFieldGrid>
                            <SFieldLabel>
                              Layout
                              <SCompactControl>
                                <Select
                                  value={block.layout}
                                  options={[
                                    { label: 'feature-left', value: 'feature-left' },
                                    { label: 'feature-right', value: 'feature-right' },
                                  ]}
                                  onChange={(value) =>
                                    updateBlock(blockIndex, (draftBlock) => {
                                      (draftBlock as IServiceMediaClusterBlock).layout = value;
                                    })
                                  }
                                  size="large"
                                />
                              </SCompactControl>
                            </SFieldLabel>

                            <SSubsection>
                              <SSubsectionHeader>
                                <SSubsectionTitle>Media items</SSubsectionTitle>
                                <Button
                                  onClick={() =>
                                    updateBlock(blockIndex, (draftBlock) => {
                                      const mediaBlock = draftBlock as IServiceMediaClusterBlock;
                                      mediaBlock.items.push(createMediaItem());
                                    })
                                  }
                                >
                                  Добавить item
                                </Button>
                              </SSubsectionHeader>

                              <SArrayStack>
                                {block.items.map((item, itemIndex) => (
                                  <SSubsection key={`media-item-${itemIndex}`}>
                                    <SSubsectionHeader>
                                      <SSubsectionTitle>Item {itemIndex + 1}</SSubsectionTitle>
                                      <Button
                                        danger
                                        onClick={() =>
                                          updateBlock(blockIndex, (draftBlock) => {
                                            const mediaBlock =
                                              draftBlock as IServiceMediaClusterBlock;
                                            mediaBlock.items.splice(itemIndex, 1);
                                          })
                                        }
                                      >
                                        Удалить
                                      </Button>
                                    </SSubsectionHeader>

                                    <SFieldLabel>
                                      Src
                                      <Input
                                        size="large"
                                        value={item.src}
                                        onChange={(event) =>
                                          updateBlock(blockIndex, (draftBlock) => {
                                            const mediaBlock =
                                              draftBlock as IServiceMediaClusterBlock;
                                            mediaBlock.items[itemIndex].src = event.target.value;
                                          })
                                        }
                                      />
                                    </SFieldLabel>

                                    <SFieldLabel>
                                      Alt
                                      <Input
                                        size="large"
                                        value={item.alt}
                                        onChange={(event) =>
                                          updateBlock(blockIndex, (draftBlock) => {
                                            const mediaBlock =
                                              draftBlock as IServiceMediaClusterBlock;
                                            mediaBlock.items[itemIndex].alt = event.target.value;
                                          })
                                        }
                                      />
                                    </SFieldLabel>
                                  </SSubsection>
                                ))}
                              </SArrayStack>
                            </SSubsection>
                          </SFieldGrid>
                        )}

                        {block.type === 'cta' && (
                          <SFieldGrid>
                            <SFieldLabel>
                              Label
                              <Input
                                size="large"
                                value={block.label}
                                onChange={(event) =>
                                  updateBlock(blockIndex, (draftBlock) => {
                                    (draftBlock as IServiceCtaBlock).label = event.target.value;
                                  })
                                }
                              />
                            </SFieldLabel>

                            <SFieldLabel>
                              Href
                              <Input
                                size="large"
                                value={block.href}
                                onChange={(event) =>
                                  updateBlock(blockIndex, (draftBlock) => {
                                    (draftBlock as IServiceCtaBlock).href = event.target.value;
                                  })
                                }
                              />
                            </SFieldLabel>
                          </SFieldGrid>
                        )}
                      </SBlockCard>
                    ))
                  ) : (
                    <SMuted>Блоков пока нет.</SMuted>
                  )}
                </SBlockStack>
              </SSection>
            </>
          ) : (
            <SSection>
              <SSectionTitle>Нет выбранного сервиса</SSectionTitle>
              <SMuted>Добавьте сервис слева, чтобы начать редактирование.</SMuted>
            </SSection>
          )}
        </SEditor>
      </SLayout>
    </SPage>
  );
};
