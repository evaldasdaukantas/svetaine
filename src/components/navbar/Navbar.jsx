import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import logo from './logo.svg'
import './navbar.css'


export default function navbar() {
  return (
    <div>
      
<Navbar bg="light" expand="lg">
  <Container>
    <div className='image'>
    <Navbar.Brand href="/"><img src={logo} alt="" /></Navbar.Brand>
      </div>
      <div className="togglerMeniu">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <div className='navLinks'>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/services">Services</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        </div>
      </Nav>
    </Navbar.Collapse>
</div>
  </Container>
</Navbar>
    </div>
  )
}
