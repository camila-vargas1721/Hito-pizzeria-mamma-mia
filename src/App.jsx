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
import { CartProvider } from './context/CartContext.jsx';
import { PizzaProvider } from './context/PizzaContext.jsx';
import { UserProvider } from './context/UserContext.jsx';
import { ProtectedRoute, RestrictedRoute } from './components/ProtectedRoute.jsx'; 

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <PizzaProvider>
          <CustomNavbar />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route 
              path="/register" 
              element={<RestrictedRoute><Register /></RestrictedRoute>} 
            />
            <Route 
              path="/login" 
              element={<RestrictedRoute><Login /></RestrictedRoute>} 
            />
            
            <Route path="/cart" element={<Cart />} />
            
            <Route path="/pizza/:id" element={<Pizza />} />

            <Route 
              path="/profile" 
              element={<ProtectedRoute><Profile /></ProtectedRoute>} 
            />
                   
            <Route path="*" element={<NotFound />} /> 
          </Routes>
          
          <Footer />
        </PizzaProvider>
      </CartProvider>
    </UserProvider>
  );
}

export default App;