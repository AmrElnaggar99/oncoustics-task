import React from "react"
import { Container, Navbar, Nav, Image } from "react-bootstrap"
import SearchBox from "./SearchBox"
import { UserInfo } from "./UserInfo"

const Header = () => {
  return (
    <header>
      <Navbar className="p-0" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              width="40"
              height="40"
              src="https://fakestoreapi.com/icons/logo.png"
              alt="logo"
              className="nav-logo-icon d-lg-none"
            />
            Fake Store
          </Navbar.Brand>

          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-lg-none">
              <Nav.Link href="#">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse> */}
          <UserInfo />
          <SearchBox />
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
