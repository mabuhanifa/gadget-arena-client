import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageInventories = () => {
    const[user]= useAuthState(auth);
    const [loading, setLoading] = useState(true);
    const[users,setUsers] = useState([]);
    useEffect(() => {
        fetch('https://protected-sands-09387.herokuapp.com/user')
        .then(res => res.json())
        .then(data => { 
            setUsers(data);
            setLoading(false);
        });
    },[]);
    const deleteItem = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this item?');
        if(proceed){
            const url = `https://protected-sands-09387.herokuapp.com/user/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){   
                    const remaining = users.filter(user => user._id !== id);
                    setUsers( remaining );
                    toast("Item deleted successfully", { type: "success" });
                }
            });
        }
        

    }

    return (
        <div>
            <ToastContainer />
            <div className='container-lg'> 
                                    <div className='text-center'>{loading && <Spinner  animation="border" variant="primary" />}</div>
            <table className="table table-striped">
  <thead>
    <tr>
    <th scope="col">Image</th>
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

        </div>
    );
};

export default ManageInventories;