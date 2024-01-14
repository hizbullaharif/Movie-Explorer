import {StyleSheet} from 'react-native';
import {scale} from '../../utils/scale';
import theme from '../../theme/theme';

const style = StyleSheet.create({
  columnWrapper: {
    marginVertical: scale(10),
  },
  txt: {
    color: theme.palette.white,
  },
});
export default style;
