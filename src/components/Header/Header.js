import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav className="navbar">
                <a href="/meals">Meals</a>
                <a href="/pricing">Pricing</a>
                <a href="/review">Order Review</a>
            </nav>
        </div>
    );
};

export default Header;