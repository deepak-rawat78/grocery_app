import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import styles from './FoodCard.styles';
import {HeartOnIcon, foodImagePlaceholder, plusIcon} from '../../assets/icons';
import {ProductType} from '../../views/home/types';

interface Props {
  data: ProductType;
  onPress: () => void;
  handleClickOnAddButton: () => void;
  containerStyles: StyleProp<ViewStyle>;
}

const FoodCard = ({
  data,
  containerStyles,
  handleClickOnAddButton,
  onPress,
}: Props) => {
  const {price, description, thumbnail} = data;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyles]}>
      <View style={styles.imageContainer}>
        <Image
          source={thumbnail ? {uri: thumbnail} : foodImagePlaceholder}
          style={styles.imagePlaceholder}
        />
        <Image source={HeartOnIcon} style={styles.heartIcon} />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.detailContainer}>
          <Text style={styles.price}>${price}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <TouchableOpacity
          onPress={handleClickOnAddButton}
          style={styles.plusButton}>
          <Image source={plusIcon} style={styles.plusIcon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;
