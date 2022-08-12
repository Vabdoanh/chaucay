import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap';

const Header = () => {
  return (
        <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Kho</Navbar.Brand>
    <Nav className="me-auto"> 
      <Nav.Link href="/">Sản phẩm</Nav.Link>
      <Nav.Link href="/forminput">Nhập Hàng</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <br />
</>
  )
}

export default Header
