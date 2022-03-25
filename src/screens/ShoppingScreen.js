import React, { useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import ProductList from "../components/ProductList"
import Cart from "../components/Cart"
import Header from "../components/Header"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const ShoppingScreen = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const navigate = useNavigate()

  useEffect(() => {
    if (!userInfo) {
      navigate("/login")
    }
  }, [userInfo, navigate])

  return (
    <>
      <Row className="g-0 overall-container">
        <Col lg={8} className="col-12 px-3 product-list-container">
          <Header />
          <ProductList />
        </Col>
        <Col lg={4} className="col-12 cart-list-container">
          <Cart />
        </Col>
      </Row>
    </>
  )
}

export default ShoppingScreen
