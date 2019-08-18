import TYPE from '../types/cart';

export default function (state = null, action) {
  switch (action.type) {
    case TYPE.RES_DATA: return resData(state, action);
    case TYPE.RES_GET_CART: return resData(state, action);
    case TYPE.RES_REMOVE_ITEM_CART: return resData(state, action);
    default: return state;
  }
}

function resData(state, action) {
  const { data } = action;
  return data;
}
