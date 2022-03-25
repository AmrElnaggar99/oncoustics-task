import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { productListReducer } from "./reducers/productReducers"
import { userLoginReducer } from "./reducers/userReducer"

const reducer = combineReducers({
  productList: productListReducer,
  userLogin: userLoginReducer,
})

const userInfoFromStorage =
  localStorage.getItem("userInfo") !== undefined
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}
const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
