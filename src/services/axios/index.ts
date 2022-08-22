import axios from 'axios';
export interface AxiosFactoryI {
  baseURL: string;
  params: {
    api_key?: string;
  };
}
export default function AxiosFactory(props: AxiosFactoryI) {
  const instance = axios.create(props);

  instance.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  return instance;
}
