import React, { useContext } from "react";
import {
    Button,
    Container,
    Nav,
    NavDropdown,
    Navbar,
  } from "react-bootstrap";
import logo from '../../images/logo.png'
import './header.css'
import {observer} from 'mobx-react-lite'
import { useNavigate } from "react-router";
import { Context } from "../../index";
import { ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, USER_PROFILE_ROUTE } from "../../utils/consts";


const Header = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = ()=>{
         //user.setUser({})
         //user.setIsAuth(false)
         localStorage.clear()
         navigate(HOME_ROUTE)
    }
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
                    {localStorage.isAuth ?  
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
                        {localStorage.userRole === 'USER'? 
                            <Nav.Link
                            onClick={()=>navigate(USER_PROFILE_ROUTE)}> ПРОФИЛЬ 
                            </Nav.Link> :
                            <Nav.Link
                            onClick={()=>navigate(ADMIN_ROUTE)}> АДМИН
                            </Nav.Link> 
                        }
                    </Nav>
                        <Button  className="aligh-center header-button" onClick={()=>logOut()}>выход</Button>
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
                            <Button  className="aligh-center header-button" onClick={()=> navigate(REGISTRATION_ROUTE)}>регистрация</Button>
                    </Navbar.Collapse> 
                    
                    }
                </Container>
            </Navbar>

        </>
     );
})
 
export default Header;