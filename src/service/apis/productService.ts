import axios from '../axios';

export const getProductList = (params: any) => {
  return axios.get('/products', params);
};

export const getProductDetail = (id: string) => {
  return axios.get(`/products/${id}`);
};
