'use client';

import { type FormEvent, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styled from 'styled-components';
import { Alert, Button, Input } from 'antd';

interface IAdminLoginFormProps {
  configured: boolean;
}

const SPage = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
  background: #0f0f10;

  .ant-btn {
    transition:
      background-color 0.2s ease,
      border-color 0.2s ease,
      color 0.2s ease,
      box-shadow 0.2s ease,
      transform 0.2s ease;
  }

  .ant-btn:not(:disabled):not(.ant-btn-disabled):hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 20px rgba(15, 23, 42, 0.12);
  }

  .ant-btn-default:not(.ant-btn-dangerous):not(:disabled):not(.ant-btn-disabled):hover,
  .ant-btn-color-default:not(.ant-btn-dangerous):not(:disabled):not(.ant-btn-disabled):hover {
    color: #191919 !important;
    border-color: #aeb7c4 !important;
    background: #eef2f6 !important;
  }
`;

const SPanel = styled.section`
  width: min(420px, 100%);
  display: grid;
  gap: 20px;
  padding: 32px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow:
    0 24px 60px rgba(0, 0, 0, 0.22),
    0 8px 24px rgba(0, 0, 0, 0.12);
`;

const SHeading = styled.div`
  display: grid;
  gap: 8px;
`;

const STitle = styled.h1`
  margin: 0;
  text-align: center;
  color: #191919;
  font-size: 28px;
  line-height: 1.05;
  font-weight: 700;
`;

const SText = styled.p`
  margin: 0;
  color: #666666;
  font-size: 14px;
  line-height: 1.5;
`;

const SForm = styled.form`
  display: grid;
  gap: 16px;
`;

export const AdminLoginForm = ({ configured }: IAdminLoginFormProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const nextPath = searchParams.get('next') || '/admin/services';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!configured) {
      setError('Админка не настроена: задайте ADMIN_PASSWORD и ADMIN_SESSION_SECRET.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { message?: string } | null;

        setError(data?.message ?? 'Не удалось войти');
        return;
      }

      router.replace(nextPath);
      router.refresh();
    } catch {
      setError('Не удалось войти');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SPage>
      <SPanel>
        <SHeading>
          <STitle>Админ панель</STitle>
          <SText>Редактирование контента сервисов напрямую из интерфейса.</SText>
        </SHeading>

        {!configured && (
          <Alert
            type="warning"
            showIcon
            message="Не настроены переменные окружения"
            description="Добавьте ADMIN_PASSWORD и ADMIN_SESSION_SECRET, затем перезапустите dev-сервер."
          />
        )}

        {error && <Alert type="error" showIcon message={error} />}

        <SForm onSubmit={handleSubmit}>
          <Input.Password
            size="large"
            placeholder="Пароль"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoFocus
          />

          <Button htmlType="submit" loading={isSubmitting} disabled={!configured}>
            Войти
          </Button>
        </SForm>
      </SPanel>
    </SPage>
  );
};
