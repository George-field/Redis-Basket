import TYPE from '../../types/cart';
import axios from 'axios';


export default function addItemToCart(item) {
  return (dispatch) => {
    dispatch({ type: TYPE.REQ_DATA });
    return axios.post('http://localhost:3000/v1.0/cart/add', { item: item }).then(response => {
      console.log(response)
      dispatch({
        type : TYPE.RES_DATA, 
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
