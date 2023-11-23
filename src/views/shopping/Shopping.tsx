import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './Shopping.styles';
import {rightArrow} from '../../assets/icons';
import CButton from '../../components/CButton/CButton';
import {PaymentDetailItem, PaymentDetailsProps} from './types';
import CartItem from './components/CartItem/CartItem';

interface HeaderProp {
  count: number;
}

const Header = ({count = 0}: HeaderProp) => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={[styles.headerContainer, {paddingTop: top}]}>
      <TouchableOpacity style={styles.backButton}>
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
    {title: 'Subtotal', value: subTotal, styles: styles.subtotal},
    {title: 'Delivery', value: deliveyCharges, styles: styles.delivery},
    {title: 'Total', value: subTotal + deliveyCharges, styles: styles.total},
  ];

  const renderPaymentItem = (item: PaymentDetailItem) => (
    <View style={[styles.paymentItem, item.styles]}>
      <Text style={styles.paymentItemTitle}>{item.title}</Text>
      <Text>{item.value}</Text>
    </View>
  );

  return (
    <View style={styles.paymentContainer}>
      {data.map(renderPaymentItem)}
      <CButton
        title="Proceed  To checkout"
        textStyle={styles.checkoutText}
        containerStyle={styles.checkoutButton}
        onPress={onPressCheckout}
      />
    </View>
  );
};

const ItemSeparatorComponent = () => <View style={styles.itemSeparator} />;

const ListFooterComponent = () => (
  <>
    <View style={styles.itemSeparator} />
    <TouchableOpacity style={styles.editButton}>
      <Text style={styles.editText}>Edit</Text>
    </TouchableOpacity>
  </>
);

const Shopping = () => {
  let count = 0;
  const onPressCheckout = () => {};

  const renderItem = () => {
    return <CartItem />;
  };

  return (
    <View style={styles.container}>
      <Header count={count} />
      <FlatList
        data={new Array(20)}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListFooterComponent={ListFooterComponent}
        style={styles.cartList}
      />

      <PaymentDetails
        subTotal={0}
        deliveyCharges={0}
        onPressCheckout={onPressCheckout}
      />
    </View>
  );
};

export default Shopping;
