import axios from "axios"
import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "./actionType"

const getProductRequest = () => {
  return {
    type: GET_PRODUCT_REQUEST,
  }
}
const getProductSuccess = payload => {
  return {
    type: GET_PRODUCT_SUCCESS,
    payload,
  }
}

const getProductFailure = error => {
  return {
    type: GET_PRODUCT_FAILURE,
    payload: error,
  }
}

const getProduct = () => dispatch => {
  dispatch(getProductRequest())
  return axios
    .get(
      "https://serpapi.com/search.json?engine=walmart&query=Coffee&api_key=adf094f424eaf9d4a30af607e33833c06f551834dc546131c8125fff0876d7e9"
    )

    .then(res => {
      const successAction = getProductSuccess(res.data.organic_results)
      dispatch(successAction)
    })
    .catch(err => {
      dispatch(getProductFailure(err))
    })
}
export { getProduct }
