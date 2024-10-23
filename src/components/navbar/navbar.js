import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import './navbar.css';
import logo from '../../assets/images/logo.png'

const Navbar = () => {
  const navigate = useNavigate();
  return(
    <div className='navbar'>
        <div className="logo">
            <img src={logo} alt="TATTQR-LOGO" />
        </div>
        <div className="nav-items">
            <ul className="nav-items-list">
                <li className='nav-item'>Home</li>
                <li className='nav-item'>About</li>
                <li className='nav-item'>Teams</li>
                <li className='nav-item'>Testimonials</li>
                <li className='nav-item'>Contact Us</li>
                <li className='nav-item'>Login</li>
            </ul>
            <button type='primary' onClick={() => navigate('/signup')}>Sign Up</button>
        </div>

    </div>
  )
}

export default Navbar;