import React , { useState } from 'react';
import { FaTimes , FaBars } from 'react-icons/fa';
import { Nav , NavbarContainer , NavLogo , MobileIcon , NavMenu , NavItem , NavLinks } from './NavbarStyle';

const Navbar = () => {
    const  [ click , setClick ] = useState(false);

    const handelClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={closeMobileMenu}>
                        <img src="images/logo/logo-seo.png"/>
                    </NavLogo>
                    <MobileIcon onClick={handelClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handelClick} click={click}>
                        <NavItem>
                            <NavLinks to="/">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/about">About Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/casestudy">Case Study</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/pricing">Pricing</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/contact">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>

                </NavbarContainer>
            </Nav>
            
        </>
    )
}

export default Navbar
