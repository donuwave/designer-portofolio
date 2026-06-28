import 'styled-components';

interface IFontCategory {
  extraLarge?: string;
  large: string;
  medium: string;
  small: string;
}

export interface IFontTheme {
  headline: IFontCategory;
  title: IFontCategory;
  body: IFontCategory;
  label: IFontCategory;
  navTab: {
    default: string;
    active: string;
  };
}

export interface IBorderRadiusTheme {
  large: string;
  medium: string;
  small: string;
  extraSmall: string;
  full: string;
}

export interface IColorsTheme {
  green: {
    primary: string;
    primaryHigh: string;
    primaryHighest: string;
    onPrimary: string;
    secondary: string;
    secondaryHigh: string;
    secondaryHighest: string;
    onSecondary: string;
  };
  orange: {
    primary: string;
    primaryHigh: string;
    primaryHighest: string;
    onPrimary: string;
    secondary: string;
    secondaryHigh: string;
    secondaryHighest: string;
    onSecondary: string;
  };
  error: {
    base: string;
    onError: string;
    container: string;
    containerLowest: string;
    onErrorContainer: string;
  };
  disabled: {
    container: string;
    onContainer: string;
  };
  neutral: {
    container: string;
    containerHigh: string;
    containerHighest: string;
    onContainer: string;
  };
  surface: {
    default: string;
    bright: string;
    containerLowest: string;
    containerLow: string;
    container: string;
    containerHigh: string;
    containerHighest: string;
    onSurface: string;
    onSurfaceVariant: string;
  };
  outline: {
    base: string;
    variant: string;
  };
  system: {
    primary: string;
    notch: string;
  };
}

export interface IBreakpointsTheme {
  maxMobile: string;
  maxTablets: string;
  maxLaptops: string;
  maxOldDesktops: string;
  maxDesktops: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColorsTheme;
    borderRadius: IBorderRadiusTheme;
    font: IFontTheme;
    breakpoints: IBreakpointsTheme;
  }
}
