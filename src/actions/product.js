import {ADD_DATA_PRODUCT} from '../constants';
export function addProductList(data) {
  return {
    type: ADD_DATA_PRODUCT,
    payload: data,
  };
}
