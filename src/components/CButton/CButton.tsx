import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import styles from './CButton.styles';

interface Props {
  title: string;
  onPress: () => void;
  textStyle: StyleProp<TextStyle>;
  containerStyle: StyleProp<ViewStyle>;
}

const CButton = ({title, onPress, textStyle, containerStyle}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CButton;
