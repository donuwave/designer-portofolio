const COMPACT_MAX_WIDTH = 390;
const COMPACT_DESKTOP_WIDTH = 624;
const WIDE_MAX_WIDTH = 1108;
const WIDE_DESKTOP_WIDTH = 1772.8;
const BUTTON_HEIGHT = 157;
const FLUID_MIN_VIEWPORT = 1200;
const FLUID_MAX_VIEWPORT = 1920;
const HEADER_TOP_OFFSET = '42px';
const HEADER_BASE_HEIGHT = 72;
const PAGE_PADDING = 'clamp(16px, 4vw, 48px)';
const GRID_GAP = 'clamp(20px, 2.6vw, 32px)';
const VIEWPORT_DOT_OFFSET = 'calc(3.083333vw)';
const VIEWPORT_DOT_INNER_OFFSET = 'calc(32.833333vw)';
const COMPACT_FLUID_WIDTH = 'calc(32.5vw)';
const WIDE_FLUID_WIDTH = 'calc(92.333333vw)';
const WIDE_WIDTH = `min(calc(100vw - (${VIEWPORT_DOT_OFFSET} * 2)), ${WIDE_FLUID_WIDTH})`;
const COMPACT_WIDTH = `min(calc(100vw - (${PAGE_PADDING} * 2)), ${COMPACT_FLUID_WIDTH})`;
const COMPACT_SCALE = `(${COMPACT_WIDTH} / ${COMPACT_MAX_WIDTH}px)`;
const HEADER_HEIGHT = `calc(${HEADER_BASE_HEIGHT}px * ${COMPACT_SCALE})`;
const HEADER_OFFSET = `calc(${HEADER_TOP_OFFSET} + ${HEADER_HEIGHT})`;

export const fluidBetween = (min: number, max: number) =>
  `max(${min}px, calc(${min}px + ${max - min} * ((100vw - ${FLUID_MIN_VIEWPORT}px) / ${FLUID_MAX_VIEWPORT - FLUID_MIN_VIEWPORT})))`;

export const layout = {
  compactMaxWidth: COMPACT_MAX_WIDTH,
  compactDesktopWidth: COMPACT_DESKTOP_WIDTH,
  wideMaxWidth: WIDE_MAX_WIDTH,
  wideDesktopWidth: WIDE_DESKTOP_WIDTH,
  fluidMinViewport: FLUID_MIN_VIEWPORT,
  fluidMaxViewport: FLUID_MAX_VIEWPORT,
  noScaleBreakpoint: 880,
  buttonHeight: BUTTON_HEIGHT,
  headerTopOffset: HEADER_TOP_OFFSET,
  headerBaseHeight: HEADER_BASE_HEIGHT,
  headerHeight: HEADER_HEIGHT,
  headerOffset: HEADER_OFFSET,
  pagePadding: PAGE_PADDING,
  cardPadding: 'clamp(20px, 3vw, 32px)',
  gridGap: GRID_GAP,
  sectionGap: 'clamp(32px, 4vw, 48px)',
  sectionPadding: 'clamp(56px, 8vw, 100px)',
  wideWidth: WIDE_WIDTH,
  compactWidth: COMPACT_WIDTH,
  compactScale: COMPACT_SCALE,
  wideScale: `(${WIDE_WIDTH} / ${WIDE_MAX_WIDTH}px)`,
  viewportDotOffset: VIEWPORT_DOT_OFFSET,
  viewportDotCompactLeft: VIEWPORT_DOT_INNER_OFFSET,
  viewportDotCompactRight: `calc(100vw - ${VIEWPORT_DOT_INNER_OFFSET})`,
} as const;
