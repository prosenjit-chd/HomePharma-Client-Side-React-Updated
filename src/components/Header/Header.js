import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { BagCheckFill, PersonCircle, PersonPlusFill, PersonXFill } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';
import userphoto from '../../img/user.png';

// Header Internal Style 
const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "#e6520e",
        borderBottom: "solid 2px #e6520e"
    }

    const {user, logOut} = useAuth();
    // Internal Style Use here 
    return (
        <div>
            {/* Bootstrap Tag use here  */}
            <Navbar variant="light" expand="lg" className="fixed-top" style={{ "backgroundColor": "rgba(253, 245, 230, 0.74)"}}>
            <Container fluid>
                <NavLink style={{color: "#e6520e"}} className="navbar-brand fw-bold" to="/home"> <img style={{height: 50, width: 50, borderRadius: "50%"}} src="https://pbs.twimg.com/media/FCCDmvmUcAoYNyR?format=jpg&name=900x900" />HomePharma</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto fw-bold">
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/home">Home</NavLink>
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/services">Medicines</NavLink>
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/about">About</NavLink>
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/faq">Contact</NavLink>
                        <NavLink className="nav-link d-flex align-items-center" activeStyle={activeStyle} to="/calculateprice"> <BagCheckFill/> <span> Cart </span></NavLink>
                        {
                            user?.email ? 
                            <div>
                                <img style={{height: 40, width: 40, borderRadius: "50%"}} src={user.photoURL || userphoto }/>
                                <span> {user?.displayName}</span>
                                <button className="btn-log" onClick={logOut}> <PersonCircle/> LogOut </button>
                            </div>

                            : 
                            <NavLink className="nav-link" activeStyle={activeStyle} to="/signin"> <PersonPlusFill/> SignIn</NavLink>
                        }
                       
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;