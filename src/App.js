import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import Register from './components/Register'
import Login from './components/Login'
import AccountSettings from './components/AccountSettings'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<AccountSettings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
