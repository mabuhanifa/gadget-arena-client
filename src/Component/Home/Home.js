import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
    const [loading, setLoading] = useState(true);
    const[users,setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
        .then(res => res.json())
        .then(data => { 
            setUsers(data);
            setLoading(false);
        });
    },[]);
    const deleteItem = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this item?');
        if(proceed){
            const url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){   
                    const remaining = users.filter(user => user._id !== id);
                    setUsers( remaining );
                }
            });
        }
        

    }
    return (
        <div className='container-lg'> 
                                    <div className='text-center'>{loading && <Spinner  animation="border" variant="primary" />}</div>
            <h2>
                available user {users.length}
            </h2>
            <table className="table table-striped">
  <thead>
    <tr>
    <th scope="col">Iamge</th>
      <th scope="col">Product Name</th>
      <th scope="col">Email</th>
      <th scope="col">Supplier</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
  {users.map(user => <tr key={user._id}>
                    <td><img className='p-img' src={user.img} alt="" /></td> 
                    <td>{user.name}</td> 
                    <td>{user.email}</td>
                    <td>{user.supplier}</td>
                    <td>${user.price}</td>
                    <td>{user.quantity}</td>
                    <td><Link to={`/update/${user._id}`}><button className='btn btn-primary'>Update</button></Link></td>
                    <td><button className='btn btn-danger' onClick={() => deleteItem(user._id)}> Delete</button></td>
                    </tr>)}
  </tbody>
</table>

            
        </div>
    );
};

export default Home;