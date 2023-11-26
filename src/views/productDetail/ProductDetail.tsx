import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ActivityIndicator,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';
import {bagIcon, rightArrow} from '../../assets/icons';
import styles from './ProductDetail.styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CButton from '../../components/CButton/CButton';
import Chip from '../../components/Chip/Chip';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Screens} from '../../routes/routeUtils';
import {useQuery} from '@tanstack/react-query';
import {getProductDetail} from '../../service/apis/productService';
import {ProductType} from '../home/types';
import useCartData from '../../hooks/useCartData';
import Carousel from '../shopping/components/Carousel/Carousel';
import {AxiosResponse} from 'axios';

const Header = ({
  onPressBack,
  onPressCart,
  count,
}: {
  count: number;
  onPressBack: () => void;
  onPressCart: () => void;
}) => {
  const {top} = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.headerContainer,
        {paddingTop: top + (Platform.OS === 'android' ? 20 : 0)},
      ]}>
      <TouchableOpacity onPress={onPressBack} style={styles.backButton}>
        <Image source={rightArrow} style={styles.rightArrow} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressCart}>
        <Image source={bagIcon} style={styles.bagIcon} />
        {count ? (
          <View style={styles.cartCountContainer}>
            <Text style={styles.cartCount}>{count}</Text>
          </View>
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

const DetailView = ({
  isLoading,
  error,
  data,
  handleClickOnCart,
  handleClickOnBuyNow,
  isAddedToCart,
}: {
  isLoading: boolean;
  error: Error | null;
  data?: ProductType;
  handleClickOnCart: () => void;
  handleClickOnBuyNow: () => void;
  isAddedToCart: boolean;
}) => {
  if (isLoading) {
    return (
      <View style={styles.fullPageContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.fullPageContainer}>
        <Text style={styles.errorText}>{error.message}</Text>
      </View>
    );
  }
  const {description, brand, title, price, discountPercentage} = data ?? {
    description: '',
    brand: '',
    title: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
  };

  return (
    <ScrollView>
      <Text style={styles.primaryTitle}>
        {brand} {'\n'}
        <Text style={styles.secondaryTitle}>{title}</Text>
      </Text>
      <View style={styles.detailContainer}>
        <Carousel data={data?.images ?? []} containerStyle={styles.carousel} />

        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>
            <Text style={styles.priceValue}>${price ?? 0}</Text>/KG
          </Text>
          {discountPercentage ? (
            <Chip
              value={`$${(price / discountPercentage).toFixed(2) ?? 0} OFF`}
              containerStyle={styles.chip}
            />
          ) : null}
        </View>

        <View style={styles.buttonContainer}>
          <CButton
            onPress={handleClickOnCart}
            title={isAddedToCart ? 'View Cart' : 'Add To Cart'}
            containerStyle={styles.addToCartButton}
          />
          <CButton
            title="Buy Now"
            onPress={handleClickOnBuyNow}
            textStyle={styles.buyNowText}
            containerStyle={styles.buyNowButton}
          />
        </View>
        <Text style={styles.detailHeading}>Details</Text>
        <Text style={styles.detailText}>{description}</Text>
      </View>
    </ScrollView>
  );
};

const ProductDetail = ({route}: any) => {
  const {id} = route?.params;
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {data, isLoading, error} = useQuery<AxiosResponse<ProductType>>({
    queryKey: ['productDetail'],
    queryFn: () => getProductDetail(id),
  });

  const {addToCart, cartSize, count} = useCartData(id);
  const isAddedToCart = (count ?? 0) > 0;

  const handleClickOnBack = () => {
    navigation.goBack();
  };

  const navigateToShopping = () => {
    navigation.navigate(Screens.SHOPPING);
  };

  const handleClickOnCart = () => {
    if (isAddedToCart) {
      navigateToShopping();
    } else {
      data?.data && addToCart(data?.data);
    }
  };

  const handleClickOnBuyNow = () => {};

  return (
    <View style={styles.container}>
      <Header
        count={cartSize ?? 0}
        onPressBack={handleClickOnBack}
        onPressCart={navigateToShopping}
      />
      <DetailView
        isLoading={isLoading}
        error={error}
        data={data?.data}
        handleClickOnBuyNow={handleClickOnBuyNow}
        handleClickOnCart={handleClickOnCart}
        isAddedToCart={isAddedToCart}
      />
    </View>
  );
};

export default ProductDetail;
