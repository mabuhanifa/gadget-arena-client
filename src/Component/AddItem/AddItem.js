import React from 'react';
import './AddItem.css';

const AddItem = () => {
    const handleAddItem = (event) => {  
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const email = event.target.email.value;
        const supplier = event.target.supplier.value;
        const quantity= event.target.quantity.value;
        
        const user = {name,price,email,supplier,quantity};

        fetch('http://localhost:5000/user',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            alert('User added successfully');
        })
    };
    return (
        <div className='w-75 d-block mx-auto'>
            <h2>Please add a new Item</h2>
            <form onSubmit={handleAddItem} >
                
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
            
            <input type="submit" value={"Add User"}/>

            </form>
        </div>
    );
};

export default AddItem;