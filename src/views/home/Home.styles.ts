import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {fonts} from '../../assets/fonts/fonts';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  headerContainer: {
    backgroundColor: colors.priamryLightBlue,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 22,
    lineHeight: 30,
    color: colors.greyScaleBlack05,
    marginTop: 32,
  },

  // search styles
  searchContainer: {
    flexDirection: 'row',
    borderRadius: 20,
    height: 56,
    alignItems: 'center',
    backgroundColor: colors.primaryDarkBlue,
    paddingHorizontal: 25,
    marginTop: 35,
  },
  searchInput: {
    height: 56,
    marginLeft: 12,
  },
  dropDownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 29,
    marginBottom: 12,
  },
  foodItem: {
    marginHorizontal: 8,
  },
  recommandedText: {
    fontSize: 30,
    lineHeight: 38,
    color: colors.greyScaleBlack,
    marginHorizontal: 20,
    marginTop: 27,
    fontFamily: fonts.bold,
  },
  columnWrapperStyle: {
    marginVertical: 11,
    marginHorizontal: 8,
  },
  carousel: {
    marginTop: 24,
  },
});

export default styles;
