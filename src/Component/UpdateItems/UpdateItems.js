import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './UpdateItems.css';
const UpdateItems = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/user/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
      console.log(user.name);
  }, []);

  const UpdateItem = (event) => {
    event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const email = event.target.email.value;
        const supplier = event.target.supplier.value;
        const quantity= event.target.quantity.value;

    const updatedItem = { name,price, email,supplier,quantity };

    // send data to the server
    const url = `http://localhost:5000/user/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("users added successfully!!!");
        event.target.reset();
      });
  };
  return (
    <div>
      <h2 className="text-center">Updating Item : {user.name}</h2>
      <form className="update-form" onSubmit={UpdateItem}>
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
            
        <input className="i-btn" type="submit" value="Update User" />
      </form>
    </div>
  );
};

export default UpdateItems;
