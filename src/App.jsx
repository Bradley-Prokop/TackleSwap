import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import  Login  from './pages/auth/Login';
import SignUp from './pages/auth/signup';
import Home from './pages/views/Home';
import Browse from './pages/views/Browse';
import MyTrades from './pages/views/MyTrades';
import Messages from './pages/views/Messages';
import NavBar from './components/navbar/NavBar';
import Footer from './components/Footer/Footer';



function App() {

  const location = useLocation();
  const hideNavbarAndFooterRouteNames = ["/login", "/signup"];
  const hideNavBarAndFooter = hideNavbarAndFooterRouteNames.includes(location.pathname);

  return ( 
    <>
      {!hideNavBarAndFooter && <NavBar/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/browse' element={<Browse/>}/>
        <Route path='/my-trades' element={<MyTrades/>}/>
        <Route path='/messages' element={<Messages/>}/>
      </Routes>
      {!hideNavBarAndFooter && <Footer/>}
    </>
  );
};

export default App;
