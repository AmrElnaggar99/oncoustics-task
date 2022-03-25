import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Col, Row } from "react-bootstrap"
import ShoppingScreen from "./screens/ShoppingScreen"
import SideNavbar from "./components/SideNavbar"
import LoginScreen from "./screens/LoginScreen"

function App() {
  return (
    <Router>
      <Row className="g-0">
        <Col className="d-none d-lg-block p-0" lg={1}>
          <SideNavbar className="d-none d-lg-block" />
        </Col>
        <Col xs={12} lg={11} className="p-0">
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/search/:keyword" element={<ShoppingScreen />} />
            <Route path="/category/:category" element={<ShoppingScreen />} />
            <Route path="/" element={<ShoppingScreen />} exact />
          </Routes>
        </Col>
      </Row>
    </Router>
  )
}

export default App
