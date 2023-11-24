import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  LayoutAnimation,
} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './Shopping.styles';
import {rightArrow} from '../../assets/icons';
import CButton from '../../components/CButton/CButton';
import {PaymentDetailItem, PaymentDetailsProps} from './types';
import CartItem from './components/CartItem/CartItem';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ShoppingType} from './cartSlice';
import useCartData from '../../hooks/useCartData';
import {ProductType} from '../home/types';

interface HeaderProp {
  count: number;
  onPressBack: () => void;
}

const Header = ({count = 0, onPressBack}: HeaderProp) => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={[styles.headerContainer, {paddingTop: top}]}>
      <TouchableOpacity onPress={onPressBack} style={styles.backButton}>
        <Image source={rightArrow} style={styles.rightArrow} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Shopping Cart ({count})</Text>
    </View>
  );
};

const PaymentDetails = ({
  subTotal,
  deliveyCharges,
  onPressCheckout,
}: PaymentDetailsProps) => {
  const data = [
    {
      title: 'Subtotal',
      value: subTotal,
      styles: styles.subtotal,
      valueStyles: styles.paymentValue,
    },
    {
      title: 'Delivery',
      value: deliveyCharges,
      styles: styles.delivery,
      valueStyles: styles.paymentValue,
    },
    {
      title: 'Total',
      value: subTotal + deliveyCharges,
      styles: styles.total,
      valueStyles: [styles.paymentValue, styles.paymentTotalValue],
    },
  ];

  const renderPaymentItem = (item: PaymentDetailItem) => (
    <View style={[styles.paymentItem, item.styles]}>
      <Text style={styles.paymentItemTitle}>{item.title}</Text>
      <Text style={item.valueStyles}>${item.value.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.paymentContainer}>
      {data.map(renderPaymentItem)}
      <CButton
        title="Proceed To checkout"
        textStyle={styles.checkoutText}
        containerStyle={styles.checkoutButton}
        onPress={onPressCheckout}
      />
    </View>
  );
};

const ItemSeparatorComponent = () => <View style={styles.itemSeparator} />;

const ListEmptyComponent = () => (
  <Text style={styles.emptyCartText}>Your cart is empty.</Text>
);

const ListFooterComponent = () => (
  <>
    <View style={styles.itemSeparator} />
    <TouchableOpacity style={styles.editButton}>
      <Text style={styles.editText}>Edit</Text>
    </TouchableOpacity>
  </>
);

const Shopping = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {cartSize, addToCart, deleteFromCart, productList, totalAmount} =
    useCartData();

  const handleClickOnBack = () => {
    navigation.goBack();
  };

  const onPressCheckout = () => {};

  const handleAddItem = (item: ProductType) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    addToCart(item);
  };

  const handleDeleteItem = (id: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    deleteFromCart(id);
  };

  const renderItem = ({item}: {item: ShoppingType}) => {
    return (
      <CartItem
        title={item.productDetail.title}
        count={item.count}
        image={item.productDetail.thumbnail}
        price={item.productDetail.price.toFixed(2)}
        onAdd={() => handleAddItem(item.productDetail)}
        onDelete={() => handleDeleteItem(item.productDetail.id)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header count={cartSize} onPressBack={handleClickOnBack} />
      <FlatList
        data={productList}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListFooterComponent={cartSize > 0 ? ListFooterComponent : null}
        style={styles.cartList}
        ListEmptyComponent={ListEmptyComponent}
      />
      <PaymentDetails
        subTotal={totalAmount}
        deliveyCharges={0}
        onPressCheckout={onPressCheckout}
      />
    </View>
  );
};

export default Shopping;
