import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {bagIcon, rightArrow} from '../../assets/icons';
import styles from './ProductDetail.styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Header = () => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={[styles.headerContainer, {paddingTop: top}]}>
      <TouchableOpacity style={styles.backButton}>
        <Image source={rightArrow} style={styles.rightArrow} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={bagIcon} style={styles.bagIcon} />
      </TouchableOpacity>
    </View>
  );
};

const ProductDetail = () => {
  return (
    <View>
      <Header />
    </View>
  );
};

export default ProductDetail;
