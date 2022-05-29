import {ADD_DATA_PRODUCT} from '../constants';
const initialState = {
  data: [],
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA_PRODUCT:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
export default productReducer;
