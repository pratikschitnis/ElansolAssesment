import './App.css'
import Signup from './Components/LoginSignUp/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/LoginSignUp/Login'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} /> {/* Signup route */}
        <Route path="/login" element={<Login />} /> {/* Login route */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
