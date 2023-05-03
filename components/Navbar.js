import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Logo from '../assets/TheWebsiteLogo.jpg';
import { ShoppingCart } from "phosphor-react";
import { Link } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
import "./navbar.css";

export const MyNavbar = () => {
     const [openLinks, setOpenLinks] = useState(false)
  return (
  
          <Navbar bg="light" expand="lg" sticky="top" variant="light">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          

    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo} />
        </div>
        <div className='leftSide'>
          <Link to="/">Home</Link>
            <Link to="/product"> Product </Link>
            <div className='cart'>
            <Link to="/cart">
            <ShoppingCart size={30} />
            </Link>
            </div>
            <Link to="/checkout"> Checkout </Link>
        </div>
    </div>
    </Navbar.Collapse>
    
    </Navbar>
  )
}
  










