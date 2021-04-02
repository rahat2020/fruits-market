import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
// import { Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { Button } from 'bootstrap';

const Header = () => {
    return (
       
 <header className="header">
 <div className="container">
     <div className="navbar">
         <div className="logo">
                 <h2>fruits market</h2>
             </div>
            <nav className="navbar_nav">
                <ul>
                     <li>
                         <Link className="nav_link" to="/">Home</Link>
                     </li>
                     <li>
                         <Link className="nav_link" to="/admin">Admin</Link>
                     </li>
                     <li>
                         <Link className="btn_primary" to="/login">Login</Link>
                     </li>
                     <li>
                         <Link className="nav_link" to="/checkOut">CheckOut</Link>
                     </li>
                     <li>
                         <Link className="nav_link" to="/addProducts">AddProducts</Link>
                     </li>
                 </ul>
          </nav>
     </div>
 </div>
</header>
    );
};

export default Header;