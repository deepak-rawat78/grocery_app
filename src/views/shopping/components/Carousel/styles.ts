import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../../assets/colors';

const {width} = Dimensions.get('window');
export const CAROUSEL_DOT_WIDTH = 19;

const styles = StyleSheet.create({
  container: {height: 207},
  flatList: {},
  dotsContainter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  dot: {
    width: CAROUSEL_DOT_WIDTH,
    borderWidth: 2,
    borderColor: colors.yellowishGrey,
    borderRadius: 2,
  },
  activeDot: {borderColor: colors.primaryDarkYellow},
  renderItem: {
    height: 200,
    width: width,
  },
});

export default styles;
