import prefixer from './prefixer';

const prefix = '@@cartTypes';

const types = {
  REQ_DATA: null,
  RES_DATA: null,
  FAIL_DATA: null,
  REQ_GET_CART: null,
  RES_GET_CART: null,
  FAIL_GET_CART: null,
  REQ_REMOVE_ITEM_CART: null,
  RES_REMOVE_ITEM_CART: null,
  FAIL_REMOVE_ITEM_CART: null,
};

export default prefixer(types, prefix);
