import {StyleProp, TextStyle} from 'react-native';

export type PaymentDetailItem = {
  title: string;
  value: number;
  styles: StyleProp<TextStyle>;
  valueStyles: StyleProp<TextStyle>;
};

export type PaymentDetailsProps = {
  subTotal: number;
  deliveyCharges: number;
  onPressCheckout: () => void;
};
