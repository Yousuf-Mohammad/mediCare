import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css'


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>

            <Navbar className="text-light" bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home" style={{ fontWeight: "bolder", fontSize: '44px' }}>mediCare</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="text-light" as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="text-light" as={HashLink} to="/home#department">Departments</Nav.Link>
                        <Nav.Link className="text-light" as={HashLink} to="/home#FAQ">FAQ</Nav.Link>
                        <Nav.Link className="text-light" as={HashLink} to="/home#aboutus">AboutUs</Nav.Link>
                        <Nav.Link className="text-light" as={Link} to="/contactus">ContactUs</Nav.Link>
                        <Nav.Link className="text-light" as={Link} to="/appointment">Appointment</Nav.Link>
                        <Navbar.Text>
                            <a className="text-warning" href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                        {user?.email ?
                            <Button onClick={logOut} variant="secondary">LogOut</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;

