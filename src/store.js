import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';

import productReducers from './reducers/productReducers';

const rootReducers = combineReducers({
  products: productReducers,
});

export default configureStore({
  reducer: rootReducers,
});
