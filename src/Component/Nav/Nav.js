import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';
import './Nav.css';

const Nav = () => {
    const[user]= useAuthState(auth);
    return (
        <div className='main'>
            <div>Gadget Arena</div>
            <nav className='nav-items'>
                <Link to="/">Home</Link>
                <Link to="/inventories">Manage Inventories</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/items">My Items</Link>
                
            </nav>
            <div className='login'><span>{user?.displayName && user.displayName}</span>
                { user?.uid
                ? 
                <button className='btn btn-danger ms-2' onClick={()=>signOut(auth)}> SignOut </button>
                :
                <Link to="/login">Login</Link>
                    }</div>
        </div>
    );
};

export default Nav;