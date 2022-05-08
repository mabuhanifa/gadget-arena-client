import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UpdateItems.css";
const UpdateItems = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/user/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data))
  }, [item]);



  const restock = (event) => {
    event.preventDefault();
    const restock = parseInt(event.target.restock.value);
    const url = `http://localhost:5000/user/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: item.name,
        price: item.price,
        email: item.email,
        supplier: item.supplier,
        quantity: parseInt(item.quantity) + restock,
      }),
    });
    event.target.reset();
  };
  
  const deliver = (event) => {
    const url = `http://localhost:5000/user/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: item.name,
        price: item.price,
        email: item.email,
        supplier: item.supplier,
        quantity: item.quantity - 1,
      }),
    });
  };
  const UpdateItem = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const price = event.target.price.value;
    const email = event.target.email.value;
    const supplier = event.target.supplier.value;
    const quantity = event.target.quantity.value;

    const updatedItem = { name, price, email, supplier, quantity };

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
      <div className="about container-lg">
        <div>
img
        </div>
        <div>
        <h2> Information about item</h2>
        <p>Name : {item.name}</p>
        <p>Price : {item.price}</p>
        <p>
          Quantity : {item.quantity}
        </p>
        <p>Email : {item.email}</p>
        <p>Supplier : {item.supplier}</p>
        <button className="d-btn" onClick={deliver}> Deliver </button>
        <br />
      <form className="restock" onSubmit={restock}>
      <input type="number" name='restock' placeholder='Amount' required/>
            <br />
        <input className="i-btn" type="submit" value="Restock" />
      </form>
        </div>
        <div>
      <h2 className="text-center">Updating Item : {item.name}</h2>
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
      </div>
  );
};

export default UpdateItems;
