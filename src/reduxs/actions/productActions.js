import { ActionTypes } from "../contants/action-types"

export const getProducts = products => {
  return {
    type: ActionTypes.GET_PRODUCTS,
    payload: products,
  }
}

export const selectedProduct = product => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  }
}
