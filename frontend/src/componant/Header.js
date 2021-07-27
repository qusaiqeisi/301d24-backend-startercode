import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { Navbar,Nav } from 'react-bootstrap';
export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    
                        <Navbar.Brand href="#home">Coffee App</Navbar.Brand>
                
                            <Nav className="me-auto">
                                <Nav.Link href="/">
                                <Link to="/">Home</Link>
                                </Nav.Link>
                                <Nav.Link href="/retreive">
                                <Link to="/retreive">Favourite</Link>
                                </Nav.Link>
                                
                            </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Header
