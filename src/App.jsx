import React from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/CustomNavbar.jsx';
import Footer from './components/Footer.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Cart from './Pages/Cart.jsx';
import Pizza from './Pages/Pizza.jsx';
import Register from './Pages/Register.jsx';
import Login from './Pages/Login.jsx';
import Profile from './Pages/Profile.jsx';
import NotFound from './Pages/NotFound.jsx';


function App() {
  
   return (
    <>
      <CustomNavbar />

      <Routes>
      
       <Route path="/" element={<Home />} />
       <Route path="/register" element={<Register />} />
       <Route path="/login" element={<Login />} />
       <Route path="/cart" element={<Cart />} />
       <Route path="/profile" element={<Profile />} />
       <Route path="/pizza/:id" element={<Pizza />} />         
       <Route path="*" element={<NotFound />} /> 

      </Routes>

      <Footer />
      
    </>
  );
};

export default App;
