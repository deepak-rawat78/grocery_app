import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.greyScaleBlack05,
    // width: 160,
    flex: 1,
    height: 194,
    borderRadius: 12,
  },
  heartIcon: {height: 13, width: 14, position: 'absolute', top: 13, left: 13},
  imagePlaceholder: {
    height: 68,
    width: 68,
  },
  imageContainer: {
    alignItems: 'center',
    paddingBottom: 46,
    paddingTop: 20,
  },
  price: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.greyScaleBlack,
  },
  description: {
    fontSize: 12,
    lineHeight: 16,
    color: colors.greyScaleBlack02,
  },
  detailContainer: {
    flex: 1,
  },
  plusIcon: {
    height: 12,
    width: 12,
  },
  plusButton: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: colors.priamryLightBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    paddingHorizontal: 17,
    paddingRight: 21,
  },
});

export default styles;
