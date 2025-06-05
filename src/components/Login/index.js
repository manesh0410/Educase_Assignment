import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = e => {
    e.preventDefault()
    const user = JSON.parse(localStorage.getItem('user'))
    if (user && user.email === email && user.password === password) {
      navigate('/account') // navigate on success
    } else {
      alert("Invalid credentials or User Doesn't Exist")
    }
  }

  return (
    <form className="card-container" onSubmit={handleLogin}>
      <h1 className='heading'>Signin to your PopX account</h1>
      <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div className="form-field">
        <span className="input-label">Email Address</span>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-field">
        <span className="input-label">Password</span>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className={email && password ? 'active' : ''}
        disabled={!email || !password}
      >
        Login
      </button>
    </form>
  )
}

export default Login
