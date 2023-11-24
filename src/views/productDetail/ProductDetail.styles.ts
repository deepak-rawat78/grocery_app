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
  bagIcon: {height: 24, width: 22},
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
    marginHorizontal: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 26,
    marginHorizontal: 20,
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
    marginHorizontal: 20,
    fontWeight: '400',
    marginTop: 30,
  },
  detailText: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.greyScaleBlack03,
    marginHorizontal: 20,
    fontWeight: '400',
  },
  detailContainer: {},
  fullPageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -80,
  },
  errorText: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.greyScaleBlack02,
    fontWeight: '400',
  },
  cartCountContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryDarkYellow,
    height: 24,
    width: 24,
    borderRadius: 12,
    top: -7,
    right: -9,
    borderWidth: 2,
    borderColor: colors.greyScaleBlack06,
  },
  cartCount: {
    fontSize: 14,
    lineHeight: 19,
    color: colors.white,
    fontWeight: '600',
  },
  carousel: {
    marginTop: 15,
  },
});

export default styles;
