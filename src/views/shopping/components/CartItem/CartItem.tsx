import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {
  foodImagePlaceholder,
  minusDarkIcon,
  plusDarkIcon,
} from '../../../../assets/icons';
import styles from './CartItem.styles';

interface Props {
  title: string;
  image: string;
  price: string;
  count: number;
  onAdd: () => void;
  onDelete: () => void;
}

const CartItem = ({title, image, price, count, onAdd, onDelete}: Props) => {
  return (
    <View style={styles.cartContainer}>
      <View style={styles.detailContainer}>
        <Image
          source={image ? {uri: image} : foodImagePlaceholder}
          style={styles.itemImage}
        />
        <View style={styles.cartTextContaienr}>
          <Text style={styles.cartItemTitle}>{title}</Text>
          <Text style={styles.cartItemDescription}>${price}</Text>
        </View>
      </View>
      <View style={styles.cartActions}>
        <TouchableOpacity onPress={onDelete} style={styles.actionButton}>
          <Image source={minusDarkIcon} />
        </TouchableOpacity>
        <Text style={styles.cartCount}>{count}</Text>
        <TouchableOpacity onPress={onAdd} style={styles.actionButton}>
          <Image source={plusDarkIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
