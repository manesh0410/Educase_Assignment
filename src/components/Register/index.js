import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'Yes',
  })

  const navigate = useNavigate()

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    localStorage.setItem('user', JSON.stringify(formData))
    navigate('/account') // navigate after registration
  }

  return (
    <form className="card-container" onSubmit={handleSubmit}>
      <h2 className='title'>Create your PopX account</h2>

      <div className="floating-label">
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder=" "
          required
        />
        <label htmlFor="fullName">Full Name</label>
      </div>

      <div className="floating-label">
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder=" "
          required
        />
        <label htmlFor="phoneNumber">Phone Number</label>
      </div>

      <div className="floating-label">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder=" "
          required
        />
        <label htmlFor="email">Email Address</label>
      </div>

      <div className="floating-label">
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder=" "
          required
        />
        <label htmlFor="password">Password</label>
      </div>

      <div className="floating-label">
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder=" "
        />
        <label htmlFor="company">Company Name</label>
      </div>

      <div className="radio-group">
        <p className="radio-label">
          Are you an Agency?<span className="required-star">*</span>
        </p>
        <div className="radio-options">
          <label className="radio-option">
            <input
              type="radio"
              name="isAgency"
              value="Yes"
              checked={formData.isAgency === 'Yes'}
              onChange={handleChange}
            />
            Yes
          </label>
          <label className="radio-option">
            <input
              type="radio"
              name="isAgency"
              value="No"
              checked={formData.isAgency === 'No'}
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </div>

      <button type="submit">Create Account</button>
    </form>
  )
}

export default Register
