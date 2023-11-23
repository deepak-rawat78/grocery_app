import {View, Text, StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import styles from './Chip.styles';

interface Props {
  value: string;
  containerStyle: StyleProp<ViewStyle>;
}
const Chip = ({value, containerStyle}: Props) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.valueText}>{value}</Text>
    </View>
  );
};

export default Chip;
