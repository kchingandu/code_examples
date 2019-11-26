import { combineReducers } from 'redux';
import products from './product/productReducer';
import basket from './basket/basketReducer';

export default combineReducers({products, basket});
