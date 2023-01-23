import React from 'react';
import { ToastContainer } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddItem.css';

const AddItem = () => {
    const handleAddItem = (event) => {  
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const email = event.target.email.value;
        const supplier = event.target.supplier.value;
        const quantity= event.target.quantity.value;
        const img= event.target.img.value;
        const info= event.target.info.value;
        
        const user = {name,price,email,supplier,quantity,img,info};

        fetch('https://gadget-arena.onrender.com/user',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            
        })
        event.target.reset();
        toast.success('Item added successfully');
    };
    return (
        <div className="d-block f_info ">
            <ToastContainer />
      <h2 className="text-center mb-5">Add New Item  </h2>
      <form className="update-form " onSubmit={handleAddItem}>
      <input type="text" name='name' placeholder='Name' required/>
            <br />
            <input type="number" name='price' placeholder='Price' required/>
            <br />
            <input type="number" name='quantity' placeholder='Quantity' required/>
            <br />
            <input type="email" name='email' placeholder='Email' required/>
            <br />
            <input type="text" name='supplier' placeholder='Supplier' required/>
            <br />
            <input type="text" name='info' placeholder='Info' required/>
            <br />
            <input type="text" name='img' placeholder='Image' required/>
            <br />
            
        <input className="i-btn" type="submit" value="Add New Item" />
      </form>
      
    </div>
    );
};

export default AddItem;