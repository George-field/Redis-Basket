import TYPE from '../../types/products';
import axios from 'axios';


export default function getData() {
  return (dispatch) => {
    dispatch({ type: TYPE.REQ_DATA });

    return axios.get('http://localhost:3000/v1.0/products').then(response => {
      dispatch({
        type : TYPE.RES_DATA, 
        data: response.data.products
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
