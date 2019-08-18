import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/app';
import { getProductData } from '../redux/actions/products';
import { addItemToCart, getCart, removeItemFromCart } from '../redux/actions/cart'

const mapStateToProps = (state, ownProps) => {
  return {
    products : state.products,
    cart: state.cart
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    getProductData : getProductData,
    addItemToCart: addItemToCart,
    getCart: getCart,
    removeItemFromCart: removeItemFromCart
  } , dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
