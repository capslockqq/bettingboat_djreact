import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import logo_text from '../logo_collapsed_80.png';
import './navigation.css';

import { BrowserRouter as Router,  NavLink } from 'react-router-dom';
function Navigation() {
  return (
        <Navbar collapseOnSelect expand="xl" bg="white" sticky="top" style={{borderBottom:"solid 1px #DCDCDC"}}>
        <Container>
        <Navbar.Brand><NavLink exact to="/"><img style={{paddingRight:"50px", paddingBottom:"10px"}}src={logo_text} alt="bettingboat logo"/></NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link ><NavLink className="main-nav" activeClassName="main-nav-active" exact to="/">Home</NavLink></Nav.Link>
              <Nav.Link><NavLink className="main-nav" activeClassName="main-nav-active" exact to="/ExpertTips">Expert Tips</NavLink></Nav.Link>
              <Nav.Link><NavLink className="main-nav" activeClassName="main-nav-active" exact to="/Experts">The Experts</NavLink></Nav.Link>
              <Nav.Link><NavLink className="main-nav" activeClassName="main-nav-active" exact to="/BetoftheDay">Bet of the Day</NavLink></Nav.Link>
              <Nav.Link><NavLink className="main-nav" activeClassName="main-nav-active" exact to="/Statistics">Statistics </NavLink></Nav.Link>

            </Nav>
            
        </Navbar.Collapse>
        </Container>
        </Navbar>
  );
}

export default Navigation;
