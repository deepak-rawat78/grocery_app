import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  rightArrow: {height: 11, width: 6},
  bagIcon: {height: 18, width: 16},
  backButton: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.greyScaleBlack05,
    borderRadius: 20,
  },
  primaryTitle: {
    fontSize: 50,
    lineHeight: 62,
    color: colors.greyScaleBlack,
    fontWeight: '300',
    marginHorizontal: 20,
  },
  secondaryTitle: {
    fontWeight: '800',
  },
  buyNowButton: {
    width: '48%',
    backgroundColor: colors.priamryLightBlue,
  },
  buyNowText: {
    color: colors.white,
  },
  addToCartButton: {width: '40%'},
  buttonContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 30,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chip: {
    marginLeft: 14,
  },
  priceValue: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.priamryLightBlue,
    fontWeight: '700',
  },
  priceText: {
    fontWeight: '400',
    color: colors.priamryLightBlue,
  },
  detailHeading: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.greyScaleBlack,
    fontWeight: '400',
    marginTop: 30,
  },
  detailText: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.greyScaleBlack03,
    fontWeight: '400',
  },
  detailContainer: {
    marginHorizontal: 20,
  },
});

export default styles;
