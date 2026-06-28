import { DefaultTheme } from 'styled-components';

import { breakpoints as breakpointsValues } from '@/shared/config';
import { IFontTheme, IColorsTheme, IBorderRadiusTheme, IBreakpointsTheme } from '@/types';

const lightThemeColors: IColorsTheme = {
  green: {
    primary: '#006C4F',
    primaryHigh: '#00563F',
    primaryHighest: '#004A36',
    onPrimary: '#FFFFFF',
    secondary: '#D7E8E2',
    secondaryHigh: '#A3D2C1',
    secondaryHighest: '#7BBDA6',
    onSecondary: '#006C4F',
  },
  orange: {
    primary: '#FF6900',
    primaryHigh: '#E86100',
    primaryHighest: '#C25405',
    onPrimary: '#FFFFFF',
    secondary: '#FFF0E6',
    secondaryHigh: '#FFD2B3',
    secondaryHighest: '#FEBD91',
    onSecondary: '#E86100',
  },
  error: {
    base: '#B3261E',
    onError: '#FFFFFF',
    container: '#F9DEDC',
    containerLowest: '#F9CAC7',
    onErrorContainer: '#B3261E',
  },
  disabled: {
    container: '#DFDFDF',
    onContainer: '#A3A3A3',
  },
  neutral: {
    container: '#E7E7E7',
    containerHigh: '#D7D7D7',
    containerHighest: '#C7C7C7',
    onContainer: '#3B3B3B',
  },
  surface: {
    default: '#F7F8F7',
    bright: '#FFFFFF',
    containerLowest: '#F5F5F5',
    containerLow: '#F1F1F1',
    container: '#EAEAEA',
    containerHigh: '#E0E0E0',
    containerHighest: '#D7D7D7',
    onSurface: '#3B3B3B',
    onSurfaceVariant: '#818281',
  },
  outline: {
    base: '#E7E7E7',
    variant: '#818281',
  },
  system: {
    primary: '#000000',
    notch: '#000000',
  },
};

export const darkThemeColors: IColorsTheme = {
  green: {
    primary: '#3FAF96',
    primaryHigh: '#33987F',
    primaryHighest: '#297B66',
    onPrimary: '#E6F5F0',
    secondary: '#1C4036',
    secondaryHigh: '#265248',
    secondaryHighest: '#32665B',
    onSecondary: '#4ED1B3',
  },
  orange: {
    primary: '#FF8C3A',
    primaryHigh: '#E6782E',
    primaryHighest: '#C26524',
    onPrimary: '#FFF0E6',
    secondary: '#7A3E1D',
    secondaryHigh: '#914823',
    secondaryHighest: '#A9542A',
    onSecondary: '#FFA25E',
  },
  error: {
    base: '#FF6666',
    onError: '#330000',
    container: '#FFB3B3',
    containerLowest: '#FF9999',
    onErrorContainer: '#330000',
  },
  disabled: {
    container: '#2C2C2C',
    onContainer: '#6E6E6E',
  },
  neutral: {
    container: '#505050',
    containerHigh: '#5E5E5E',
    containerHighest: '#6C6C6C',
    onContainer: '#F2F2F2',
  },
  surface: {
    default: '#121212',
    bright: '#1E1E1E',
    containerLowest: '#2E2E2E',
    containerLow: '#242424',
    container: '#383838',
    containerHigh: '#444444',
    containerHighest: '#505050',
    onSurface: '#FFFFFF',
    onSurfaceVariant: '#CCCCCC',
  },
  outline: {
    base: '#484848',
    variant: '#707070',
  },
  system: {
    primary: '#FFFFFF',
    notch: '#000000',
  },
};

const borderRadius: IBorderRadiusTheme = {
  full: '100%',
  large: '28px',
  medium: '24px',
  small: '12px',
  extraSmall: '4px',
};

const breakpoints: IBreakpointsTheme = {
  maxMobile: `${breakpointsValues.maxMobile}px`,
  maxTablets: `${breakpointsValues.maxTablets}px`,
  maxLaptops: `${breakpointsValues.maxLaptops}px`,
  maxOldDesktops: `${breakpointsValues.maxOldDesktops}px`,
  maxDesktops: `${breakpointsValues.maxDesktops}px`,
};

const AppFonts = {
  Play: 'var(--font-play)',
  Roboto: 'var(--font-roboto)',
};

export const font: IFontTheme = {
  headline: {
    extraLarge: `
    font-family: ${AppFonts.Play};
    font-size: 32px;
    font-weight: 700;
    line-height: 1.2;
  `,
    large: `
    font-family: ${AppFonts.Play};
    font-size: 28px;
    font-weight: 700;
    line-height: 1.2;
  `,
    medium: `
    font-family: ${AppFonts.Play};
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
  `,
    small: `
    font-family: ${AppFonts.Play};
    font-size: 18px;
    font-weight: 700;
    line-height: 1.2;
  `,
  },
  title: {
    large: `
    font-family: ${AppFonts.Roboto};
    font-size: 18px;
    font-weight: 500;
    line-height: 1.2;
  `,
    medium: `
    font-family: ${AppFonts.Roboto};
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
  `,
    small: `
    font-family: ${AppFonts.Roboto};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
  `,
  },
  body: {
    large: `
    font-family: ${AppFonts.Roboto};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
  `,
    medium: `
    font-family: ${AppFonts.Roboto};
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;
  `,
    small: `
    font-family: ${AppFonts.Roboto};
    font-size: 12px;
    font-weight: 400;
    line-height: 1.3;
  `,
  },
  label: {
    large: `
    font-family: ${AppFonts.Roboto};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
  `,
    medium: `
    font-family: ${AppFonts.Roboto};
    font-size: 14px;
    font-weight: 500;
    line-height: 1.2;
  `,
    small: `
    font-family: ${AppFonts.Roboto};
    font-size: 12px;
    font-weight: 500;
    line-height: 1.2;
  `,
  },
  navTab: {
    default: `
    font-family: ${AppFonts.Play};
    font-size: 12px;
    font-weight: 400;
  `,
    active: `
    font-family: ${AppFonts.Play};
    font-size: 12px;
    font-weight: 700;
  `,
  },
};

export const themeLight: DefaultTheme = {
  colors: lightThemeColors,
  font,
  borderRadius,
  breakpoints,
};

export const themeDark: DefaultTheme = {
  colors: darkThemeColors,
  font,
  borderRadius,
  breakpoints,
};
