import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./appNavbar.css"
import { Link } from 'react-router-dom';

const AppNavbar = () => {
    return (
    <Navbar fixed='top' expand="lg" className="bg">
        <Container>
            <Link className='text-white  nav-link fs-3' to="/">Logo</Link>
            <Navbar.Toggle className='text-white' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                <Link className='text-white nav-link' to="/">Home</Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default AppNavbar;