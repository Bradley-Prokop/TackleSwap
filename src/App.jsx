import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  Login  from './pages/auth/Login'
import SignUp from './pages/auth/signup'

function App() {

  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
