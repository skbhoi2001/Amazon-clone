import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "./actionType"

const initState = {
  products: [],
  isLoading: false,
  isError: false,
}

function reducer(state = initState, { type, payload }) {
  switch (type) {
    case GET_PRODUCT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    }
    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        products: payload,
        isLoading: false,
      }
    }
    case GET_PRODUCT_FAILURE: {
      return {
        ...state,
        isError: true,
      }
    }
    default:
      return state
  }
}
export default reducer
