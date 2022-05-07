import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './Component/AddUser/AddUser';
import Blogs from './Component/Blogs/Blogs';
import Home from './Component/Home/Home';
import Items from './Component/Items/Items';
import Login from './Component/Login/Login';
import ManageInventories from './Component/Manage Inventories/ManageInventories';
import Nav from './Component/Nav/Nav';
import NotFound from './Component/Notfound/NotFound';
import UpdateItems from './Component/UpdateItems/UpdateItems';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>

        <Route path="/" element={<Home></Home>} />
        <Route path="user/add" element={<AddUser></AddUser>}></Route>
        <Route path='/inventories' element={<ManageInventories></ManageInventories> }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>  }></Route>
        <Route path='/items' element={<Items></Items>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/update/:id" element={<UpdateItems></UpdateItems>}></Route>
        <Route path="*" element={<NotFound></NotFound>}/>

      </Routes>
      
    </div>
  );
}

export default App;
