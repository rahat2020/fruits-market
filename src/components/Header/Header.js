import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
// import { Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { Button } from 'bootstrap';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

// import { Button } from 'bootstrap';

const Header = () => {
    return (

        <header>
            <Navbar bg="light" expand="lg" className="container margin-left-10px">
                <Navbar.Brand href="#home">Fruits market</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav justify-space-between">

                    <Nav className="mr-auto navStyle p-10px">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/admin">Admin</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/checkOut">CheckOut</Nav.Link>
                        <Nav.Link href="/addProducts">AddProducts</Nav.Link>
                        <Nav.Link href="/order">Order</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                </Navbar.Collapse>
            </Navbar>
        </header>


        // <header className="header">
        //     <div className="container">
        //         <div className="navbar">
        //             <div className="logo">
        //                 <h2>fruits market</h2>
        //             </div>

        //             <nav className="navbar_nav">
        //         <ul>
        //              <li>
        //                  <Link className="nav_link" to="/">Home</Link>
        //              </li>
        //              <li>
        //                  <Link className="nav_link" to="/admin">Admin</Link>
        //              </li>
        //              <li>
        //                  <Link className="btn_primary" to="/login">Login</Link>
        //              </li>
        //              <li>
        //                  <Link className="nav_link" to="/checkOut">CheckOut</Link>
        //              </li>
        //              <li>
        //                  <Link className="nav_link" to="/addProducts">AddProducts</Link>
        //              </li>
        //              <li>
        //                  <Link className="nav_link" to="/order">Order</Link>
        //              </li>
        //          </ul>
        //   </nav>
        //         </div>
        //     </div>
        // </header>
    );
};

export default Header;