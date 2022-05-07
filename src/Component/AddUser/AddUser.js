import React from 'react';
import './AddUser.css';

const AddUser = () => {
    const handleAddUser = (event) => {  
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = {name,email};

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
        <div className='main'>
            <h2>Please add a new user</h2>
            <form onSubmit={handleAddUser} >
                
            <input type="text" name='name' placeholder='Name' required/>
            <br />
            <input type="email" name='email' placeholder='Email' required/>
            <br />
            <input type="submit" value={"Add User"}/>

            </form>
        </div>
    );
};

export default AddUser;