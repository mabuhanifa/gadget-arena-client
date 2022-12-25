import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
    const [loading, setLoading] = useState(true);
    const[users,setUsers] = useState([]);
    useEffect(() => {
        fetch('https://gadget-arena-server-production.up.railway.app/user')
        .then(res => res.json())
        .then(data => { 
            setUsers(data);
            setLoading(false);
        });
    },[]);
    
    return (
        <div className='container-lg'> 
                                    <div className='text-center'>{loading && <Spinner  animation="border" variant="primary" />}</div>
          <div className='mt-5 d-flex p-5 m_b'>
              <div className='mt-5'>
                  <img src="https://i.ibb.co/LZMmM5D/samsung-memory-J8-Cfm4-W8gd8-unsplash.jpg" alt="" />
              </div>
              <div className='p-5 w-100 '>
                  <h3 className='text-center'> Welcome to Gadget Arena</h3>
                  <p className='about '>
                      Gadget Arena is one of the largest electronic gadget importer in USA. We import all kinds of electronic gadgets from all over the world. We have a wide range of electronic gadgets from all over the world. We not only import but also export electronic gadgets to all over the world. We have one of the best product management system in the world.
                     

                  </p>
              </div>
              </div>
            
            <div className='d-all'>
            {
                users.slice(0,6).map(user => <div className='d_items' key={user._id}>

                 <img className='d_img' src={user.img} alt="" />   
                <div className='d-flex-column'>
                <h6>Product Name : {user.name}</h6>
                <p>Info : {user.info}</p>
                <p>Price : {user.price}</p>
                <p>Stock Quantity : {user.quantity}</p>
                <p>Brand : {user.supplier} </p>
                <Link to={`/inventories`}><button className='btn btn-primary d-block mx-auto'>Update this Product</button></Link>
                </div>
            

                </div>)
            }
            </div>
            
            
        </div>
    );
};

export default Home;