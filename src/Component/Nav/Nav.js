import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <div className='main'>
            <div>Gadget Arena</div>
            <div className='nav-items'>
                <a href="/">Home</a>
                <a href="/inventories">Inventories</a>
                <a href="/blogs">Blogs</a>
                <a href="/item">My Items</a>
                <a href="/Login">Update</a>
            </div>
            <div>User</div>
        </div>
    );
};

export default Nav;