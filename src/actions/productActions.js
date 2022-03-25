import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_QTY_IN_CART,
} from "../constants/productConstants"

import axios from "axios"
export const listProducts =
  (keyword = "", category = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST })

      let { data } = await axios.get("https://fakestoreapi.com/products")
      data = data.filter(
        (el) =>
          el.title.toLowerCase().includes(keyword.toLowerCase()) &&
          (el.category.toLowerCase() === category.toLowerCase() ||
            !category.trim())
      )

      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const addToCart = (id) => async (dispatch) => {
  try {
    dispatch({ type: ADD_TO_CART, payload: { id } })
  } catch (error) {
    console.log(error)
  }
}

export const removeFromCart = (id) => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_FROM_CART, payload: { id } })
  } catch (error) {
    console.log(error)
  }
}

export const adjustQtyInCart = (id, newVal) => async (dispatch) => {
  try {
    dispatch({
      type: ADJUST_QTY_IN_CART,
      payload: {
        id,
        qty: parseInt(newVal),
      },
    })
  } catch (error) {
    console.log(error)
  }
}
