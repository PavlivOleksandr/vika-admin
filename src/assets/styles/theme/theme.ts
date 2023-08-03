export interface IPallete {
  red: string;
  dark: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  white: string;
  black: string;
  orange: string;
  primary: string;
}

export const pallete: IPallete = {
  red: '#ff6363',
  dark: '#585858',
  white: 'white',
  black: 'black',
  gray1: '#2f2f2f',
  gray2: '#767676',
  gray3: '#c4c4c480',
  gray4: '#636363',
  orange: '#ffbe48',
  primary: '#4096ff',
};

export const theme = {
  // palette
  ...pallete,

  // ---colors---

  // font
  darkFont: pallete.dark,
  grayFont: pallete.gray2,
  primaryFont: pallete.primary,

  // screen
  mobile: '520px',
  tablet: '1280px',

  // font
  fontSizeS: '6px',
  fontSizeM: '12px',
  fontSizeML: '16px',
  fontSizeL: '18px',
  fontSizeXL: '32px',
  fontSizeXXL: '48px',

  boldFont: 600,
  lightFont: 300,
  bolderFont: 900,
  semiBoldFont: 500,
  defaultFontWeight: 400,

  // border
  circleBorderRadius: '50%',
  defaultBorderRadius: '8px',

  // padding
  paddingXS: '2px',
  paddingS: '6px',
  paddingM: '12px',
  paddingL: '24px',
  paddingXL: '32px',
  paddingXXL: '48px',

  paddingPC: '240px',
  paddingTablet: '80px',

  // margin
  marginXS: '3px',
  marginS: '6px',
  marginM: '10px',
  marginL: '22px',
  marginXL: '48px',

  // snippet
  centerSnippet: 'display: flex; align-items: center; justify-content: center;',
  fullWidthHeight: 'width: 100%; height: 100%;',
  centerColumnSnippet: 'display: flex; flex-direction: column; align-items: center; justify-content: center;',
};
