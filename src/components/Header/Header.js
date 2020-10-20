import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../../images/header.png';
import logo from '../../images/icons/logo.png';

const Header = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("https://images.pexels.com/photos/69934/firefighters-fire-flames-outside-69934.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")` }} className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt=""/>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="">Blog</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/book">Donation</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/book">Events</Link>
                    </li>
                    
                    <li>
                        <Link to="/adminDashboard">Admin</Link>
                    </li>
                </ul>
            </nav>
            <div className="title-container">
               
            </div>
        </div>
    );
};

export default Header;