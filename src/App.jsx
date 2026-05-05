import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Login  from './pages/auth/Login';
import SignUp from './pages/auth/signup';
import Home from './pages/views/Home';
import NavBar from './components/navbar/NavBar';
import MyTrades from './pages/views/MyTrades';
import Messages from './pages/views/Messages';

function App() {
  return ( 
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/my-trades' element={<MyTrades/>}/>
        <Route path='/messages' element={<Messages/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
