import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./UpdateItems.css";



const UpdateItems = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const url = `https://protected-sands-09387.herokuapp.com/user/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data))
  }, [item]);



  const restock = (event) => {
    event.preventDefault();
    const restock = parseInt(event.target.restock.value);
    const url = `https://protected-sands-09387.herokuapp.com/user/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: item.name,
        img: item.img,
        price: item.price,
        email: item.email,
        supplier: item.supplier,
        quantity: parseInt(item.quantity) + restock,
        info: item.info,
      }),
    });
    event.target.reset();
  };
  
  const deliver = (event) => {
    const url = `https://protected-sands-09387.herokuapp.com/user/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: item.name,
        img: item.img,
        price: item.price,
        email: item.email,
        supplier: item.supplier,
        quantity: item.quantity - 1,
        info: item.info,
      }),
    });
  };
  const UpdateItem = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const img = event.target.img.value;
    const price = event.target.price.value;
    const email = event.target.email.value;
    const supplier = event.target.supplier.value;
    const info = event.target.info.value;
    const quantity = event.target.quantity.value;

    const updatedItem = { name,img, price, email, supplier, quantity,info };

    // send data to the server
    const url = `https://protected-sands-09387.herokuapp.com/user/${id}`;
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
        toast.success("users added successfully!!!");
        event.target.reset();
      });
  };
  return (
      <div className="about container-lg d-flex">
        <div className="p_info ">
          <h3 className="ms-5">Deliver or Restock Item</h3>
        <div className='d_items' key={item._id}>

                 <img className='d_img' src={item.img} alt="" />   
                <div className='d-flex-column'>
                <h4>Product Name : {item.name}</h4>
                <p>Info : {item.info}</p>
                <p>Price : {item.price}</p>
                <p>Stock Quantity : {item.quantity}</p>
                <p>Brand : {item.supplier} </p>
                </div>
                <button className="d-btn" onClick={deliver}> Deliver </button>
        <br />
      <form className="restock" onSubmit={restock}>
      <input type="number" name='restock' placeholder='Amount' required/>
            <br />
        <input className="i-btn" type="submit" value="Restock" />
      </form>

                </div>
        
        </div>


        {/* ----------------Update Form--------------------- */}

        <div className="d-block f_info ">
      <h2 className="text-center mb-5">Update Whole Item </h2>
      <form className="update-form " onSubmit={UpdateItem}>
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
            
        <input className="i-btn" type="submit" value="Update User" />
      </form>
    </div>
    <ToastContainer />
      </div>
  );
};

export default UpdateItems;
