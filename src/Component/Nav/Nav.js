import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <div className='main'>
            <div>Gadget Arena</div>
            <nav className='nav-items'>
                <Link to="/">Home</Link>
                <Link to="/inventories">Inventories</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/items">My Items</Link>
                <Link to="/login">Login</Link>
            </nav>
            <div>User</div>
        </div>
    );
};

export default Nav;