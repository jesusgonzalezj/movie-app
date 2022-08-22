import AxiosFactory from '../axios/index';
import { AxiosFactoryI } from '../axios/index';

let service: any = null;

export default function MovieApi() {
  if (!service) {
    const propsAxiosFactory: AxiosFactoryI = {
      baseURL: `${process.env.REACT_APP_API_URL_MOVIE}/${process.env.REACT_APP_API_MOVIE_VERSION}`,
      params: {
        api_key: process.env.REACT_APP_API_KEY_MOVIE
      }
    };
    service = AxiosFactory(propsAxiosFactory);
  }
  return service
}

