import React, { useContext } from "react";
import {
    Button,
    Container,
    Nav,
    NavDropdown,
    Navbar,
  } from "react-bootstrap";
  //import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import logo from '../../images/logo.png'
import './header.css'
import {observer} from 'mobx-react-lite'
// import About from './../../pages/About'
// import Home from './../../pages/Home'
// import Contacts from "../../pages/Contacts";
// import Registration from './../../pages/Registration'
// import LogIn from './../../pages/LogIn'
import { Context } from "../../index";
const Header = observer(() => {
    const {user} = useContext(Context)
    return ( 
        <>
            <Navbar className="header-navbar"
                stinky="top"
                collapseOnSelect
                expand="md"
                >
                <Container className="header-container">
                    <Navbar.Brand href="/">
                        <img src={logo} width={80} className="d-inline-block aligh-center header-logo" alt="logo"></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    {user.isAuth ?  
                    <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto w-100 header-menu"> 
                        <Nav.Link href="/"> ГЛАВНАЯ </Nav.Link>
                        <Nav.Link href="/about"> О НАС </Nav.Link>
                        <Nav.Link href="/blog"> ФОТОГАЛЕРЕЯ </Nav.Link>
                        <NavDropdown id="header-nav-dropdown" title="УСЛУГИ" menuVariant="light">
                            <NavDropdown.Item className="header-dropdown-item" href="/BC">ПЕРЕПОДГОТОВКА С “B”/“C” НА “A”</NavDropdown.Item>
                            <NavDropdown.Item className="header-dropdown-item" href="/B">Категория B</NavDropdown.Item>
                            <NavDropdown.Item className="header-dropdown-item" href="/C">Категория С</NavDropdown.Item>
                            <NavDropdown.Item className="header-dropdown-item" href="/CE">Категория СЕ</NavDropdown.Item>
                            <NavDropdown.Item className="header-dropdown-item" href="/D">Категория D</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/contacts"> КОНТАКТЫ </Nav.Link>
                        <Nav.Link href="/user"> ПРОФИЛЬ </Nav.Link>
                    </Nav>
                        <Button href="/registration" className="aligh-center header-button" onClick={()=>user.setIsAuth(false)}>выход</Button>
                    </Navbar.Collapse>  
                    :
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-auto w-100 header-menu"> 
                            <Nav.Link href="/"> ГЛАВНАЯ </Nav.Link>
                            <Nav.Link href="/about"> О НАС </Nav.Link>
                            <Nav.Link href="/blog"> ФОТОГАЛЕРЕЯ </Nav.Link>
                            <NavDropdown id="header-nav-dropdown" title="УСЛУГИ" menuVariant="light">
                                <NavDropdown.Item className="header-dropdown-item" href="/BC">ПЕРЕПОДГОТОВКА С “B”/“C” НА “A”</NavDropdown.Item>
                                <NavDropdown.Item className="header-dropdown-item" href="/B">Категория B</NavDropdown.Item>
                                <NavDropdown.Item className="header-dropdown-item" href="/C">Категория С</NavDropdown.Item>
                                <NavDropdown.Item className="header-dropdown-item" href="/CE">Категория СЕ</NavDropdown.Item>
                                <NavDropdown.Item className="header-dropdown-item" href="/D">Категория D</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/contacts"> КОНТАКТЫ </Nav.Link>
                        </Nav>
                            <Button href="/" className="aligh-center header-button" onClick={()=>user.setIsAuth(true)}>регистрация</Button>
                    </Navbar.Collapse> 
                    
                    }
                </Container>
            </Navbar>

            {/* <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/about" element={<About/>} />
                    <Route exact path="/contacts" element={<Contacts/>} />
                    <Route exact path="/registration" element={<Registration/>} />
                    <Route exact path="/login" element={<LogIn/>} />
                    <Route exact path="#action/3.1" element={<Contacts/>} />
                    <Route exact path="#action/3.2" element={<Contacts/>} />
                    <Route exact path="#action/3.3" element={<Contacts/>} />
                    <Route exact path="/blog" element={<Blog/>} />
                </Routes>
            </Router> */}

        </>
     );
})
 
export default Header;