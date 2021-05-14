import React from 'react';
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                  <LinkContainer to='/'>
                      <Navbar.Brand>
                           <img alt="" src="../public/StoreLogo192.png" width="30" height="30"
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
                    <LinkContainer to='login'>
                        <Nav.Link><i className="fas fa-user"></i> Login</Nav.Link>
                    </LinkContainer>
                </Nav>
              </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    );
}

export default Header;