import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    const[users,setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
        .then(res => res.json())
        .then(data => { 
            setUsers(data);
        });
    },[]);
    const deleteData = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this user?');
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
        <div>
            <h2>
                available user {users.length}
            </h2>
            <ul>{users.map(user => <li
                    key={user._id}
                    >{user.name}:: {user.email}
                    <Link to={`/update/${user._id}`}><button>Update</button></Link>
                    <button onClick={() => deleteData(user._id)}>X</button>
                    </li>)}
            </ul>
        </div>
    );
};

export default Home;