import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_QTY_IN_CART,
} from "../constants/productConstants"

export const productListReducer = (
  state = { products: [], cart: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true, products: [] }
    case PRODUCT_LIST_SUCCESS:
      return { ...state, loading: false, products: action.payload }
    case PRODUCT_LIST_FAIL:
      return { ...state, loading: false, error: action.payload }
    case ADD_TO_CART:
      const item = state.products.find((el) => el.id === action.payload.id)
      const inCart = state.cart.find((el) => el.id === action.payload.id)
        ? true
        : false
      return {
        ...state,
        cart: inCart
          ? state.cart.map((el) =>
              el.id === action.payload.id ? { ...el, qty: el.qty + 1 } : el
            )
          : [...state.cart, { ...item, qty: 1 }],
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((el) => el.id !== action.payload.id),
      }
    case ADJUST_QTY_IN_CART:
      return {
        ...state,
        cart: state.cart.map((el) =>
          el.id === action.payload.id ? { ...el, qty: action.payload.qty } : el
        ),
      }
    default:
      return state
  }
}
