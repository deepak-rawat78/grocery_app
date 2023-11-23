import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.priamryLightBlue,
    alignSelf: 'flex-start',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 14,
    lineHeight: 19,
    fontWeight: '600',
    color: colors.priamryLightBlue,
  },
});

export default styles;
