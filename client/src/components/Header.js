import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap';

const Header = () => {
  return (
        <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Kho</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Nhập Phiếu</Nav.Link>
      <Nav.Link href="/products">Sản phẩm</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <br />
</>
  )
}

export default Header