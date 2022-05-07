import React, { useEffect, useState } from 'react';
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
            <ul>

                {users.map(user => <li>{user.name} -  {user.email} <button onClick={()=> deleteData(user._id)}>x</button></li>)}
            </ul>

            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quam numquam dolorum reprehenderit aut quis quidem officia excepturi facere, veritatis autem distinctio sapiente, labore rerum deleniti atque in omnis tempore debitis ex itaque modi impedit voluptatibus. Dolorem beatae ducimus unde quisquam sunt officia sapiente, vero, quas reprehenderit dolores illo eius molestias in nisi adipisci at est. Provident ducimus alias incidunt blanditiis fuga laudantium vero nisi, illo nam obcaecati est ut accusamus asperiores possimus architecto. Sunt harum rerum vel soluta, iusto est quaerat dolor molestiae consequuntur ab, et, error nam esse quibusdam inventore sit magnam tempore quidem accusamus magni aut! Qui sunt odio provident quo est harum assumenda eum eveniet labore! Ea eos, porro consequatur ipsam excepturi quaerat sint quisquam facilis nihil earum libero perferendis doloremque, architecto provident accusamus eligendi dolor illo neque molestiae dolorum laudantium ducimus. Consequatur exercitationem voluptatem culpa! Veniam illo beatae rerum dolores ex fugit ea blanditiis enim suscipit neque aliquam harum repudiandae asperiores esse aut, necessitatibus sed corrupti, odio quos? Distinctio dicta quidem ad, quae libero et sequi incidunt ea velit magni eaque laboriosam quia earum! Similique ducimus adipisci ipsum soluta eius perspiciatis aliquam, eum odio deserunt natus explicabo commodi dolor, voluptate tempore quia neque pariatur laudantium? Quasi, quisquam.
            </p>
        </div>
    );
};

export default Home;