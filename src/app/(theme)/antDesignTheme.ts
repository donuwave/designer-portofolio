import { ThemeConfig } from 'antd/es/config-provider/context';
import { DefaultTheme } from 'styled-components';

export const getAntdTheme = (styledComponentsTheme: DefaultTheme): ThemeConfig => ({
  token: {
    fontFamily: `var(--font-jet_brains_Mono)`,
    fontSize: 16,
    borderRadius: 12,
    lineHeight: 1,
    colorPrimary: styledComponentsTheme.colors.green.primary,
    colorInfo: styledComponentsTheme.colors.green.primaryHigh,
    colorLink: styledComponentsTheme.colors.green.primaryHigh,
    colorInfoText: styledComponentsTheme.colors.green.primaryHigh,
    colorPrimaryText: styledComponentsTheme.colors.green.primaryHigh,
  },
  components: {
    Button: {
      controlHeightLG: 157,
      controlHeight: 42,
      controlHeightSM: 32,
      colorText: '#FFFFFF',
      colorPrimary: '#FFFFFF',
      colorPrimaryHover: '#FFFFFF',
      colorPrimaryActive: '#FFFFFF',
      defaultColor: '#FFFFFF',
      defaultBg: '#3844EE',
      defaultActiveBg: '#7079FF',
      defaultBorderColor: 'transparent',
      defaultHoverBorderColor: 'transparent',
      defaultActiveBorderColor: 'transparent',
      borderColorDisabled: 'none',
      borderRadiusLG: 48,
      defaultShadow: 'none',
      primaryShadow: 'none',
      contentFontSizeLG: 24,
    },
  },
});
