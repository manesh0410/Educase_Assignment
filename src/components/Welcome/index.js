import { useNavigate } from 'react-router-dom'
import './index.css'

const Welcome = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-container">
      <h1 className="title">Welcome to PopX</h1>
      <p className='description'>Lorum ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button type="button" onClick={() => navigate('/register')}>
        Create Account
      </button>
      <button type="button" onClick={() => navigate('/login')}>
        Already Registered? Login
      </button>
    </div>
  )
}

export default Welcome
