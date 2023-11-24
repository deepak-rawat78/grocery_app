import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.timeout = 15000;
axios.defaults.baseURL = 'https://dummyjson.com';

const AxiosService = function () {
  async function get(endPoint: string, params?: any) {
    return await axios.get(endPoint, {params});
  }

  return {
    get,
  };
};

export default AxiosService();
