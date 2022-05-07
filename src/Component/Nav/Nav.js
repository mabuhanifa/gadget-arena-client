import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <div className='main'>
            <div>Gadget Arena</div>
            <nav className='nav-items'>
                <Link href="/">Home</Link>
                <Link href="/inventories">Inventories</Link>
                <Link href="/blogs">Blogs</Link>
                <Link href="/items">My Items</Link>
                <Link href="/login">Update</Link>
            </nav>
            <div>User</div>
        </div>
    );
};

export default Nav;