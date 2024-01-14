import {StyleSheet} from 'react-native';

import theme from '../../theme/theme';
import {scale} from '../../utils/scale';

const styles = StyleSheet.create({
  heading: {
    fontSize: scale(20),
    fontFamily: theme.typography.type.semi,
    color: theme.palette.TypographyDarkBrown,
  },
  title: {
    fontFamily: theme.typography.type.bold,
    fontSize: scale(18),
    color: theme.palette.white,
  },
  movieTitle: {
    fontSize: scale(16),
    lineHeight: scale(18),
    marginTop: scale(14),
    fontFamily: theme.typography.type.bold,
    color:theme.palette.white
  },
  movieReleaseDate: {
    fontSize: scale(14),
    lineHeight: scale(16),
    marginTop: scale(5),
    fontFamily: theme.typography.type.semi,
    opacity: 0.6,
    color:theme.palette.white
  },
  columnWrapper:{
    marginBottom: scale(20),
  }
});

export default styles;
