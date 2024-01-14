import {scale} from '../utils/scale';
import {
  RUBIK_BOLD,
  RUBIK_SEMI_BOLD,
  RUBIK_MEDIUM,
  RUBIK_REGULAR,
} from '../constants/constants';

const theme = {
  palette: {
    //* Primary (black):
    PrimaryLight: '#2C2C2C',

    //* Secondary (Yellow):
    SecondaryLight: '#FFB039',

    //* Typography (Black):
    TypographyLight: '#7d7e7b',
    TypographyDarkBrown: '#444444',

    // borders
    borderColorLight: '#D6D6D6',

    //* Commons
    white: 'white',
    black: 'black',
    transparent: 'transparent',
  },
  typography: {
    type: {
      reg: RUBIK_REGULAR,
      med: RUBIK_MEDIUM,
      semi: RUBIK_SEMI_BOLD,
      bold: RUBIK_BOLD,
    },
  },
  GRADIENTDETAILS: [
    'rgba(0,0,0 , 1)',
    'rgba(0,0,0 , 1)',
    'rgba(0,0,0 , 1)',
    'rgba(0,0,0 , 1)',
    'rgba(0,0,0 , 1)',
    'rgba(0,0,0 , 1)',
    'rgba(0,0,0 , 1)',
    'rgba(0,0,0 , 1)',
    'rgba(0,0,0 , 1)',
    'rgba(0,0,0 , 1)',
    'rgba(0,0,0 , 1)',
    'rgba(0,0,0 , 1)',
    'rgba(0,0,0 , 0.8)',
    'rgba(0,0,0 , 0.8)',
    'rgba(0,0,0 , 0.1)',
    'rgba(255, 255, 255, 0)',
  ],
};

export default theme;
