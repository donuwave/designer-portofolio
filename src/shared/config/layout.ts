const COMPACT_MAX_WIDTH = 390;
const COMPACT_DESKTOP_WIDTH = 624;
const WIDE_MAX_WIDTH = 1108;
const WIDE_DESKTOP_WIDTH = 1772.8;
const BUTTON_HEIGHT = 156;
const PAGE_PADDING = 'clamp(16px, 4vw, 48px)';
const GRID_GAP = 'clamp(20px, 2.6vw, 32px)';
const VIEWPORT_DOT_OFFSET = 'calc(3.083333vw)';
const VIEWPORT_DOT_INNER_OFFSET = 'calc(32.833333vw)';
const COMPACT_FLUID_WIDTH = 'calc(32.5vw)';
const WIDE_FLUID_WIDTH = 'calc(92.333333vw)';
const WIDE_WIDTH = `min(calc(100vw - (${VIEWPORT_DOT_OFFSET} * 2)), ${WIDE_FLUID_WIDTH})`;
const COMPACT_WIDTH = `min(calc(100vw - (${PAGE_PADDING} * 2)), ${COMPACT_FLUID_WIDTH})`;

export const layout = {
  compactMaxWidth: COMPACT_MAX_WIDTH,
  compactDesktopWidth: COMPACT_DESKTOP_WIDTH,
  wideMaxWidth: WIDE_MAX_WIDTH,
  wideDesktopWidth: WIDE_DESKTOP_WIDTH,
  noScaleBreakpoint: 880,
  buttonHeight: BUTTON_HEIGHT,
  pagePadding: PAGE_PADDING,
  cardPadding: 'clamp(20px, 3vw, 32px)',
  gridGap: GRID_GAP,
  sectionGap: 'clamp(32px, 4vw, 48px)',
  sectionPadding: 'clamp(56px, 8vw, 100px)',
  wideWidth: WIDE_WIDTH,
  compactWidth: COMPACT_WIDTH,
  compactScale: `(${COMPACT_WIDTH} / ${COMPACT_MAX_WIDTH}px)`,
  wideScale: `(${WIDE_WIDTH} / ${WIDE_MAX_WIDTH}px)`,
  viewportDotOffset: VIEWPORT_DOT_OFFSET,
  viewportDotCompactLeft: VIEWPORT_DOT_INNER_OFFSET,
  viewportDotCompactRight: `calc(100vw - ${VIEWPORT_DOT_INNER_OFFSET})`,
} as const;
