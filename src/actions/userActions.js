import axios from "axios"
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/userConstants"

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }

    const { data } = await axios.post(
      "https://fakestoreapi.com/auth/login",
      { username, password },
      config
    )

    const userData = await axios.get("https://fakestoreapi.com/users/1")

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: { ...data, ...userData.data },
    })

    localStorage.setItem(
      "userInfo",
      JSON.stringify({ ...data, ...userData.data })
    )
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo")
  dispatch({ type: USER_LOGOUT })
}
