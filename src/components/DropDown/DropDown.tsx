import {View, Text, Image} from 'react-native';
import React from 'react';
import {downArrow} from '../../assets/icons';
import styles from './DropDown.styles';

interface Props {
  title: string;
  description: string;
}

const DropDown = ({title, description}: Props) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{description}</Text>
        <Image source={downArrow} style={styles.downArrow} />
      </View>
    </View>
  );
};

export default DropDown;
