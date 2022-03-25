import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { Container, Row, Col, Button } from "react-bootstrap"
import { listProducts } from "../actions/productActions"
import Product from "./Product"
import Loader from "./Loader"

const ProductList = () => {
  let { keyword, category } = useParams()
  if (!category) {
    category = ""
  }
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const changeCategory = (e, cat) => {
    e.preventDefault()
    if (cat.trim()) {
      navigate(`/category/${cat}`)
    } else {
      navigate(`/`)
    }
  }

  const categories = [
    "Electronics",
    "Jewelery",
    "Men's clothing",
    "Women's clothing",
  ]
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList
  useEffect(() => {
    dispatch(listProducts(keyword, category))
  }, [dispatch, keyword, category])
  return (
    <>
      <Container id="categories-container">
        <Row>
          <Col key={"all"} sm={12} md={1}>
            <Button
              onClick={(e) => changeCategory(e, "")}
              variant="light"
              className={
                category.toLowerCase().trim() ? "my-2" : "active my-2"
              }>
              All
            </Button>
          </Col>
          <Col sm={12} md={11}>
            <Row>
              {categories.map((cat) => (
                <Col key={cat} sm={6} md={3}>
                  <Button
                    onClick={(e) => changeCategory(e, cat)}
                    variant="light"
                    className={
                      cat.toLowerCase() === category.toLowerCase()
                        ? "active my-2"
                        : "my-2"
                    }>
                    {cat}
                  </Button>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <Container id="shopping-list-container">
        {loading ? (
          <Loader />
        ) : error ? (
          <h3>{error}</h3>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.id} sm={12} md={6}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  )
}

export default ProductList
