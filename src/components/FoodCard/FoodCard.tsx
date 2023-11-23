import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './FoodCard.styles';
import {HeartOnIcon, foodImagePlaceholder, plusIcon} from '../../assets/icons';

const FoodCard = ({containerStyles}) => {
  return (
    <View style={[styles.container, containerStyles]}>
      <View style={styles.imageContainer}>
        <Image source={foodImagePlaceholder} style={styles.imagePlaceholder} />
        <Image source={HeartOnIcon} style={styles.heartIcon} />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.detailContainer}>
          <Text style={styles.price}>$34</Text>
          <Text style={styles.description}>f jfl sj</Text>
        </View>
        <TouchableOpacity style={styles.plusButton}>
          <Image source={plusIcon} style={styles.plusIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FoodCard;
