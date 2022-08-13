import './App.css';
import React from 'react';

//components
import AddUser from './components/add_user';
import NavBar from './components/navbar';
import Home from './components/home';
import AllUser from './components/allUser';


//routing
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import EditUser from './components/editUser';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path='/' element={<Home></Home>}/>
            <Route path='/allUser' element={<AllUser></AllUser>}/>
            <Route path='/addUser' element={<AddUser></AddUser>}/>
            <Route path='/editUser/:id' element={<EditUser></EditUser>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
