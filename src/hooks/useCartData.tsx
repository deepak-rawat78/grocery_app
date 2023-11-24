import {useCallback, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store';
import {addProduct, deleteProduct} from '../views/shopping/cartSlice';
import {ProductType} from '../views/home/types';

const useCartData = (id?: string | number) => {
  const shoppingState = useSelector((state: RootState) => state.shoppingSlice);

  const dispatch = useDispatch<AppDispatch>();

  const addToCart = useCallback(
    (item: ProductType) => {
      dispatch(addProduct(item));
    },
    [dispatch],
  );
  const deleteFromCart = useCallback(
    (itemId: number) => {
      dispatch(deleteProduct(itemId));
    },
    [dispatch],
  );

  const productData = useMemo(() => {
    if (!id) {
      return {};
    }

    const cartItem = shoppingState.findIndex(
      item => item.productDetail.id === id,
    );
    return {
      productDetail: shoppingState[cartItem] ?? null,
      count: cartItem > -1 ? shoppingState[cartItem].count : 0,
    };
  }, [id, shoppingState]);

  const {cartSize, totalAmount} = useMemo(() => {
    const {_cartSize, _totalAmount} = shoppingState.reduce(
      (prev, item) => {
        return {
          _cartSize: prev._cartSize + item.count,
          _totalAmount:
            prev._totalAmount + item.count * item.productDetail.price,
        };
      },
      {_cartSize: 0, _totalAmount: 0},
    );
    return {cartSize: _cartSize, totalAmount: _totalAmount};
  }, [shoppingState]);

  return {
    productList: shoppingState,
    addToCart,
    deleteFromCart,
    cartSize,
    totalAmount,
    ...productData,
  };
};

export default useCartData;
