import * as types from "./actionTypes";

const addCartItem = (payload) => ({ type: types.ADD_CART_ITEM, payload });
const incrementQty = (payload) => ({ type: types.INCREMENT_QTY, payload });
const decrementQty = (payload) => ({ type: types.DECREMENT_QTY, payload });

export const handleCart = (data) => (dispatch) => {
  dispatch(addCartItem({ ...data, qty: 1 }));
};

export const handleIncrement = (data) => (dispatch) => {
  dispatch(incrementQty(data));
};

export const handledecrement = (data) => (dispatch) => {
  dispatch(decrementQty(data));
};
