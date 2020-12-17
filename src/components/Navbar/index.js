import React from 'react';
import { Navbar , Container , Nav   } from 'react-bootstrap';
import './style.css'

 const NavbarSection = () => {

    return(
           <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="#home">
                   <img src="images/logo/logo-seo.png"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="/casestudy">Case Study</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/pricing">Pricing</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
              </Container>
           </Navbar>
    )
}
export default NavbarSection;