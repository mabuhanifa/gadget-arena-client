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
                
            </nav>
            <div className='login '><span>{user?.displayName && user.displayName}</span>
                { user?.uid
                ? <span className='n_v'>
                <button className='btn btn-danger mx-5' onClick={()=>signOut(auth)}> SignOut </button>
                <Link to="/items">My Item</Link>
                <Link to="user/add">Add Item</Link>
                 </span>
                :<>
                <Link to="/login">Login</Link>
                </>
                    }</div>
        </div>
    );
};

export default Nav;