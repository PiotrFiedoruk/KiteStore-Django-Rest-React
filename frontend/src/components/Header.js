import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'

function Header() {

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }
    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                  <LinkContainer to='/'>
                      <Navbar.Brand>
                           <img alt="" src="/StoreLogo192.png" width="30" height="30"
                           className="d-inline-block align-top"/>{' '}
                                Kite Store
                      </Navbar.Brand>
                  </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="basket">
                        <Nav.Link><i className="fas fa-shopping-cart"></i> Basket</Nav.Link>
                    </LinkContainer>

                    {userInfo ? (
                        <NavDropdown title={userInfo.name} id='username'>
                            <LinkContainer to='/profile'>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    ):(
                            <LinkContainer to='login'>
                        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                    </LinkContainer>
                    )}
                </Nav>
              </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    );
}

export default Header;