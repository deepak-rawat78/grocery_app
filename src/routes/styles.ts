import {Dimensions, StyleSheet} from 'react-native';
import colors from '../assets/colors';
import {fonts} from '../assets/fonts/fonts';

const {width: WIDTH} = Dimensions.get('window');

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: colors.white,
    paddingBottom: 10,
    backgroundColor: colors.white,
    paddingVertical: 10,
  },
  tabContainer: {
    height: 53,
    width: WIDTH / 4,
  },
  tabContainerDisabled: {
    opacity: 0.3,
  },

  tabIconContent: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    zIndex: 99,
  },
  tabTextStyle: {
    fontSize: 10,
    lineHeight: 13,
    color: colors.greyScaleBlack,
    fontFamily: fonts.regular,
  },
  disabledText: {},
  tabIcon: {
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIcon: {
    backgroundColor: colors.greyScaleBlack,
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
  },
});

export default styles;
