import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './Component/AddUser/AddUser';
import Home from './Component/Home/Home';
import Nav from './Component/Nav/Nav';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>

        <Route path="/" element={<Home></Home>} />
        
        <Route path='user/add' element={<AddUser></AddUser>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
