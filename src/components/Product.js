import React from "react"
import { Card, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { addToCart } from "../actions/productActions"

const Product = ({ product }) => {
  const dispatch = useDispatch()
  const addToCartHandler = (id) => {
    dispatch(addToCart(id))
  }
  return (
    <Card className="my-3 p-4 product-card">
      <div className="frow">
        <div className="pr-image-container">
          <Card.Img src={product.image} />
        </div>
        <Card.Body>
          <Card.Title as="h5">{product.title}</Card.Title>

          <Card.Text as="div">
            <p className="pr-descr">{product.description}</p>
            <p className="pr-price"> ${product.price} </p>
          </Card.Text>
        </Card.Body>
      </div>
      <Button
        className="cart-btn"
        size="lg"
        variant="primary"
        onClick={() => addToCartHandler(product.id)}>
        Add to cart
      </Button>
    </Card>
  )
}

export default Product
