import { combineReducers } from 'redux';
import home from './home';
import about from './about';
import products from './products'
import cart from './cart'



const reduxState = combineReducers({
  home,
  about,
  products,
  cart,
});

export default reduxState;
