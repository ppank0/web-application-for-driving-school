import React from "react";
import {
    Button,
    Container,
    Nav,
    NavDropdown,
    Navbar,
  } from "react-bootstrap";
import logo from '../../images/logo.png'
import './header.css'
const Header = () => {
    return ( 
        <>
            <Navbar className="header-container"
                stinky="top"
                collapseOnSelect
                expand="md"
                >
                <Container >
                    <Navbar.Brand href="/">
                        <img src={logo} width={80} className="d-inline-block aligh-center" alt="logo"></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-auto w-100 header-menu"> 
                            <Nav.Link href="/"> ГЛАВНАЯ </Nav.Link>
                            <Nav.Link href="/about"> О НАС </Nav.Link>
                            <Nav.Link href="/blog"> ФОТОГАЛЕРЕЯ </Nav.Link>
                            <NavDropdown id="header-nav-dropdown" title="УСЛУГИ" menuVariant="light">
                                <NavDropdown.Item className="header-dropdown-item" href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item className="header-dropdown-item" href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item className="header-dropdown-item" href="#action/3.3">Something</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/contacts"> КОНТАКТЫ </Nav.Link>
                        </Nav>
                        <Button className="aligh-center header-button">регистрация</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
     );
}
 
export default Header;