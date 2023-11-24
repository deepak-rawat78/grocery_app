import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {ProductType} from '../home/types';

export type ShoppingType = {
  productDetail: ProductType;
  count: number;
};

const initialState: ShoppingType[] = [];

export const shoppingSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductType>) => {
      let cartItem = state.findIndex(
        item => item.productDetail.id === action.payload.id,
      );
      if (cartItem >= 0) {
        state[cartItem].count++;
      } else {
        state.push({
          productDetail: action.payload,
          count: 1,
        });
      }
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      let cartItemIndex = state.findIndex(
        item => item.productDetail.id === action.payload,
      );
      if (state[cartItemIndex].count > 1) {
        state[cartItemIndex].count--;
      } else {
        state.splice(cartItemIndex, 1);
      }
    },
  },
});

export const {addProduct, deleteProduct} = shoppingSlice.actions;

export default shoppingSlice.reducer;
