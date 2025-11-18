import React from 'react';
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
{/*import Cart from './Cart';*/}
import Pizza from './Pizza';
{/*import Register from './Register';*/}
{/*import Login from './Login';*/}

function App() {
  
   return (
    <>
      <CustomNavbar />
      {/*Comentar <Home /> si desea ver <Pizza/>.*/}
      <Home /> 
      {/*Descomentar si es necesario */}
      {/*<Cart /> */}  
      {/*Para ver el Hito 4.2 (Detalle de Pizza), descomentar <Pizza />*/}
      {/*<Pizza /> */}  
      <Footer />
      {/*Para ver el componente RegisterPage, comentar la línea de <LoginPage /> y descomentar la línea de <Register/>.*/}
      {/*<Register />*/}
      {/*Para ver el componente Login, comentar la línea de <Register /> y descomentar la línea de <login />
       */} 
      {/*<Login />*/}
      
    </>
  );
};

export default App;
