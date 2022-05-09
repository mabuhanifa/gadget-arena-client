import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './Component/AddItem/AddItem';
import Blogs from './Component/Blogs/Blogs';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Items from './Component/Items/Items';
import Login from './Component/Login/Login';
import ManageInventories from './Component/Manage Inventories/ManageInventories';
import Nav from './Component/Nav/Nav';
import NotFound from './Component/Notfound/NotFound';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import UpdateItems from './Component/UpdateItems/UpdateItems';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>

        <Route path="/" element={<Home></Home>} />
        <Route path="user/add" element={<AddItem></AddItem>}></Route>
        <Route path="/inventories" element={
        <RequireAuth>
          <ManageInventories></ManageInventories>
        </RequireAuth>
      }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>  }></Route>
        <Route path='/items' element={<Items></Items>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/update/:id" element={<UpdateItems></UpdateItems>}></Route>
        <Route path="*" element={<NotFound></NotFound>}/>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
