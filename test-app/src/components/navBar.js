import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';

class navBar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg"  variant="dark" className="nav-bar">
                    <Navbar.Brand href="#home" >Book<br/>Barn</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="collapse-navbar">
                        <Nav className="ml-auto">
                            <Nav.Link href="#1" className="nav-item">Home</Nav.Link>
                            <Nav.Link href="#2" className="nav-item">Books</Nav.Link>
                            <Nav.Link href="#3" className="nav-item">Add Book</Nav.Link>
                            <Nav.Link href="#4" className="nav-item">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div >
        )
    }
}

export default navBar
