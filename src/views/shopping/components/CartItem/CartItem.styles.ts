import {StyleSheet} from 'react-native';
import colors from '../../../../assets/colors';

const styles = StyleSheet.create({
  cartContainer: {
    flexDirection: 'row',

    marginLeft: 6,
  },
  detailContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    height: 30,
    width: 30,
  },
  cartTextContaienr: {
    marginLeft: 26,
    flex: 1,
  },
  cartItemTitle: {
    fontSize: 14,
    lineHeight: 19,
    color: colors.greyScaleBlack,
    fontWeight: '500',
  },
  cartItemDescription: {
    fontSize: 14,
    lineHeight: 19,
    color: colors.greyScaleBlack,
    fontWeight: '400',
  },
  cartActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartCount: {
    fontSize: 14,
    lineHeight: 19,
    color: colors.greyScaleBlack,
    fontWeight: '500',
    marginLeft: 11,
    marginRight: 10,
  },
  actionButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: colors.greyScaleBlack05,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
