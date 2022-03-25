import React, { useState, useEffect } from "react"
import { Form, Alert, Button, Row, Col, Container } from "react-bootstrap"
import Loader from "../components/Loader"
import { login } from "../actions/userActions"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const LoginScreen = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin
  const navigate = useNavigate()

  useEffect(() => {
    if (userInfo) {
      navigate("/")
    }
  }, [userInfo, navigate])
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(username, password))
  }
  return (
    <Container>
      <Row className="my-5 justify-content-md-center">
        <Col xs={12} md={6}>
          <h1>Sign In</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="username" className="my-2">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId="password" className="my-2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}></Form.Control>
            </Form.Group>

            <Button
              type="submit"
              variant="primary"
              className="my-3 loginbtn"
              size="lg">
              Sign In
            </Button>
          </Form>
          <pre>
            username: johnd
            <br />
            password: m38rmF$
          </pre>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginScreen
