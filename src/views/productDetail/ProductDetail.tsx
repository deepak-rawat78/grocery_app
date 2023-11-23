import {View, TouchableOpacity, Image, Text} from 'react-native';
import React from 'react';
import {bagIcon, rightArrow} from '../../assets/icons';
import styles from './ProductDetail.styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CButton from '../../components/CButton/CButton';
import Chip from '../../components/Chip/Chip';

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
    <View style={styles.container}>
      <Header />
      <Text style={styles.primaryTitle}>
        Thin Choise {'\n'}
        <Text style={styles.secondaryTitle}>Top Orange</Text>
      </Text>
      <View style={styles.detailContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>
            <Text style={styles.priceValue}>$34</Text>/KG
          </Text>
          <Chip value="$22.04 OFF" containerStyle={styles.chip} />
        </View>
        <View style={styles.buttonContainer}>
          <CButton
            title="Add To Cart"
            containerStyle={styles.addToCartButton}
          />
          <CButton
            title="Buy Now"
            textStyle={styles.buyNowText}
            containerStyle={styles.buyNowButton}
          />
        </View>
        <Text style={styles.detailHeading}>Details</Text>
        <Text style={styles.detailText}>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Nullam quis risus eget urna mollis ornare vel eu leo.
        </Text>
      </View>
    </View>
  );
};

export default ProductDetail;
