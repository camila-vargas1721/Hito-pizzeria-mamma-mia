import React from 'react';
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Register from './Register';
import Login from './Login';

function App() {
  
   return (
    <>
      <CustomNavbar />
      {/*Para ver el componente Home (la galería de pizzas), descomentar la línea de <Home />
       */} 
      {/*<Home />*/}

      {/*Para ver el componente RegisterPage, comentar la línea de <LoginPage /> y descomentar la línea de <Register/>.*/}
      {/*<Register />*/}
      
      <Login />
      <Footer />
    </>
  );
};

export default App;
