
const Colors = {
  gray: '#a8a8a8',
  lightGray: '#c4c4c4',
  blurGray: '#f2f2f2',
  white: '#ffffff',
  black: '#1D1D1B',
  blackStrong: '#000000',
  red: '#E30613',
  secondary: '#545454',
  secondary1: '#747474',
  secondary2: '#D7D7D7',
  grayBg: '#F9F9F9',
  blueInfo: '#2384f0',
  greenSuccess: '#23ab07',
  transparent: 'transparent',
  techComPrimary: '#E30613',
};
const FontFamily = {
  HelveticaNeueLight: {
    name: 'HelveticaNeue Light',
    local: 'HelveticaNeue-Light',
  },
  HelveticaNeueRegular: {
    name: 'HelveticaNeue',
    local: 'HelveticaNeue-Regular',
  },
  HelveticaNeueItalic: {
    name: 'HelveticaNeue Italic',
    local: 'HelveticaNeue-Italic',
  },
  HelveticaNeueSemiBold: {
    name: 'HelveticaNeue SemiBold',
    local: 'HelveticaNeue-SemiBold',
  },
  HelveticaNeueBold: {
    name: 'HelveticaNeue Bold',
    local: 'HelveticaNeue-Bold',
  },
};

export const ColorThemeConfig = {
  light: {
    colorPrimary: Colors.white,
    sidebar: {
      bgColor: Colors.white,
      textColor: Colors.black,
      menuActiveColor: Colors.white,
    },
    header: Colors.transparent,
    content: Colors.white,
    background: Colors.grayBg,
  },
  dark: {
    colorPrimary: Colors.black,
    sidebar: {
      bgColor: Colors.white,
      textColor: Colors.black,
      menuActiveColor: Colors.white,
    },
    header: Colors.transparent,
    content: Colors.white,
    background: Colors.grayBg,
  },
  red: {
    colorPrimary: Colors.techComPrimary,
    sidebar: {
      bgColor: Colors.white,
      textColor: Colors.black,
      menuActiveColor: Colors.white,
    },
    header: Colors.transparent,
    content: Colors.white,
    background: Colors.grayBg,
  },
  blue: {
    colorPrimary: Colors.blueInfo,
    sidebar: {
      bgColor: Colors.white,
      textColor: Colors.black,
      menuActiveColor: Colors.blueInfo,
    },
    header: Colors.transparent,
    content: Colors.white,
    background: Colors.grayBg,
  },
};
export default {
  FontFamily,
  FontSizes: {
    body1: '0.875rem',
    body2: '0.875rem',
    extraSmall: 11,
    small: 12,
    medium: 13,
    semi: 14,
    large: 15,
    extraLarge: 16,
  },
  IconSizes: {
    verySmall: 13,
    extraSmall: 18,
    small: 20,
    medium: 24,
    large: 32,
  },
  FontWeights: {
    h6: 400,
  },
  Colors,
  Sidebar: {
    color: '',
    backgroundColor: Colors.white,
    menu: {
      color: '',
    },
    icon: {
      menuIconColor: '#838383',
    },
    logo: {
      backgroundColor: Colors.white,
    },
  },
  Header: {
    color: '',
    backgroundColor: Colors.white,
    accountBorderLeftColor: Colors.red,
  },
  Footer: {
    color: '',
  },
  Popup: {
    backgroundColor: '#4d5a68',
    color: '#4d5a68',
    borderColor: '#C10000',
  },
  Table: {
    boxShadow: '0 10px 40px 0 rgb(18 106 211 / 7%), 0 2px 9px 0 rgb(18 106 211 / 6%)',
    textColor: '#617182',
    th: {
      backgroundColor: '#E9EEFF',
    },
  },
};
