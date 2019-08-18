import TYPE from '../../types/cart';
import axios from 'axios';


export default function getCart() {
  return (dispatch) => {
    dispatch({ type: TYPE.REQ_GET_CART });
    return axios.get('http://localhost:3000/v1.0/cart/').then(response => {
      console.log(response)
      dispatch({
        type : TYPE.RES_GET_CART, 
        data: response.data.cart
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
