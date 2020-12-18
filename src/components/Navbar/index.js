import React from 'react';
import { Navbar , Container , Nav   } from 'react-bootstrap';
import './style.css'
import { NavbarLink } from './NavbarStyle'

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
                <Nav.Link>
                   <NavbarLink to="/">Home</NavbarLink>
                </Nav.Link>
                <Nav.Link>
                   <NavbarLink to="/about">About Us</NavbarLink>
                </Nav.Link>
                <Nav.Link>
                   <NavbarLink to="/casestudy">Case Study</NavbarLink>
                   </Nav.Link>
                <Nav.Link>
                   <NavbarLink to="/services">Services</NavbarLink>
                </Nav.Link>
                <Nav.Link>
                   <NavbarLink  to="/pricing">Pricing</NavbarLink>
                </Nav.Link>
                <Nav.Link>
                   <NavbarLink to="/contact">Contact</NavbarLink>
                </Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
              </Container>
           </Navbar>
    )
}
export default NavbarSection;