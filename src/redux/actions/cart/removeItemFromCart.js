import TYPE from '../../types/cart';
import axios from 'axios';

export default function removeItemFromCart(item) {
  return (dispatch) => {
    dispatch({ type: TYPE.REQ_REMOVE_ITEM_CART });
    return axios.get(`http://localhost:3000/v1.0/cart/remove/${item.id}`).then(response => {
      console.log(response)
      dispatch({
        type : TYPE.RES_REMOVE_ITEM_CART, 
        data: response.data.response.updatedCart
      })
    })
    // here is where you can make async api requests for data
    // return new Promise((resolve, reject) => {
    //   dispatch({
    //     type: TYPE.RES_DATA,
    //     data: { text: 'This is some text for the ABOUT page fetched asynchronously' }
    //   });
      return resolve();
    // });
  };
}
