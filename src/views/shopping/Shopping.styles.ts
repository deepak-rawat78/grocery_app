import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 12,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  backButton: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.greyScaleBlack05,
    borderRadius: 20,
  },
  rightArrow: {height: 11, width: 6},
  bagIcon: {height: 18, width: 16},
  headerText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    marginLeft: 21,
  },
  paymentContainer: {
    backgroundColor: colors.greyScaleBlack05,
    marginHorizontal: 16,
    borderRadius: 30,
    paddingBottom: 31,
    paddingHorizontal: 16,
  },
  paymentItemTitle: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: colors.greyScaleBlack02,
  },
  paymentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  subtotal: {
    marginTop: 17,
    marginBottom: 13,
  },
  delivery: {
    marginBottom: 16,
  },
  total: {
    marginBottom: 35,
  },
  checkoutButton: {
    height: 56,
    width: '100%',

    backgroundColor: colors.priamryLightBlue,
  },
  checkoutText: {
    color: colors.white,
  },

  // cart styles

  //
  itemSeparator: {
    height: 1,
    marginBottom: 16,
    marginTop: 20,
    backgroundColor: colors.grey,
  },
  cartList: {
    marginHorizontal: 24,
    marginTop: 45,
  },
  editText: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
    color: colors.priamryLightBlue,
  },
  editButton: {
    alignSelf: 'flex-end',
    marginBottom: 42,
    marginTop: 10,
  },
  paymentValue: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    color: colors.greyScaleBlack,
  },
  paymentTotalValue: {
    fontWeight: '600',
  },
  emptyCartText: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
    color: colors.greyScaleBlack02,
    textAlign: 'center',
  },
});

export default styles;
