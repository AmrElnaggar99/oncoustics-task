import React, { useEffect, useState } from "react"
import { Card, Container, FormControl, Row, Col, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { adjustQtyInCart, removeFromCart } from "../actions/productActions"

const Cart = () => {
  const cartList = useSelector((state) => state.productList.cart)

  const dispatch = useDispatch()

  const adjustQtyHandler = (id, newVal) => {
    dispatch(adjustQtyInCart(id, newVal))
  }

  const handleItemRemove = (id) => {
    dispatch(removeFromCart(id))
  }

  const [totalItems, setTotalItems] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let items = 0
    let price = 0

    cartList.forEach((el) => {
      items += el.qty
      price += el.qty * el.price
    })

    setTotalItems(items)
    setTotalPrice(Math.round(price * 100) / 100)
  }, [cartList])
  return (
    <Container id="cart-container">
      <div className="cart-body p-3">
        {cartList.map((product) => (
          <Card key={product.id} className="my-3 cart-card">
            <div className="frow">
              <div className="pr-image-container">
                <Card.Img src={product.image} />
              </div>
              <Card.Body>
                <Card.Title as="h6">
                  {product.title}{" "}
                  <Button
                    className="delbtn"
                    variant="dark"
                    size="sm"
                    onClick={() => handleItemRemove(product.id)}>
                    x
                  </Button>
                </Card.Title>

                <Card.Text as="div">
                  <span className="pr-qty">
                    <FormControl
                      type="number"
                      min={1}
                      value={product.qty}
                      onChange={(e) =>
                        adjustQtyHandler(product.id, e.target.value)
                      }
                    />
                  </span>
                  <span className="pr-price"> ${product.price} </span>
                </Card.Text>
              </Card.Body>
            </div>
          </Card>
        ))}
      </div>
      <div className="cart-footer">
        <Container className="px-5">
          <Row className="f-row py-3">
            <Col className="text-start">Total ({totalItems} items)</Col>
            <Col className="text-end">${totalPrice}</Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" size="lg" className="my-3">
                Checkout
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  )
}

export default Cart
