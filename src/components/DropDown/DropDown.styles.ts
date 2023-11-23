import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  downArrow: {
    width: 7,
    height: 4,
    marginLeft: 10,
  },
  description: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 19,
    color: colors.greyScaleBlack05,
    marginTop: 5,
  },
  title: {
    fontSize: 11,
    lineHeight: 15,
    color: colors.greyScaleBlack05,
    opacity: 0.5,
  },
});

export default styles;
