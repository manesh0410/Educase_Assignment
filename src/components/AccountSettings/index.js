import './index.css'

const AccountSettings = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <div className="card-container">
      <h3>Account Settings</h3>
      <div className="profile">
        <img
          src="https://res.cloudinary.com/dqrii5t00/image/upload/v1749115338/pexels-muffinsaurs-1214205_byarm6.jpg"
          alt="profile"
        />
        <div>
          <h1>{user?.fullName}</h1>
          <p>{user?.email}</p>
        </div>
      </div>
      <p>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  )
}

export default AccountSettings
