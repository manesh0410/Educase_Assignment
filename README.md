# 🚀 React Authentication App (PopX Clone)

This is a responsive React-based user authentication app that mimics basic functionality similar to PopX. It allows users to register, log in, and view their account details — all handled on the client side using `localStorage`.

Built with **React** and **React Router v6**, the app includes route protection, form validation, and a clean UI. Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

### ✅ Live Demo

🔗 [Click here to view the deployed app](https://educase-assignment-alpha-ten.vercel.app/)

## 📦 Features

- 🧾 User Registration with Email and Name
- 🔐 Login with Email & Password
- 📄 Account Page for Logged-in Users
- 💾 LocalStorage for user persistence
- 🛑 404 Not Found Page
- 🎯 Basic Form Validations
- 🧭 Smooth routing with React Router v6

---

## 🚀 Getting Started

These instructions will help you set up the project on your local machine for development and testing.

### 🔧 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes with Node.js)

---

## 📁 Project Structure

popx-auth-app/
├── public/
├── src/
│ ├── components/
│ │ ├── Account.js
│ │ ├── Login.js
│ │ ├── NotFound.js
│ │ ├── Register.js
│ │ └── Welcome.js
│ ├── App.js
│ ├── index.js
│ └── index.css
├── package.json
└── README.md

yaml
Copy
Edit

---

## 🛠️ Installation

Clone the repository and install dependencies:

git clone https://github.com/manesh0410/Educase_Assignment
cd popx-auth-app
npm install
🚦 Running the App
To start the development server:

bash
Copy
Edit
npm start
This will run the app in development mode.
Open http://localhost:3000 to view it in the browser.

The page will automatically reload if you make edits.

📌 Application Routes
Route	Component	Description
/	Welcome	Home screen with navigation
/register	Register	Sign up new user
/login	Login	Login for registered users
/account	Account	Shows user details after login
*	NotFound	Fallback 404 page

💾 How It Works
Registration saves name, email, and password to localStorage.

Login checks stored credentials and redirects to /account.

Account displays user data fetched from localStorage.

No backend/API is involved. All data is managed client-side.

📜 Scripts
In the project directory, you can run:

npm start
Runs the app in development mode.
Open http://localhost:3000 in your browser.

npm test
Launches the test runner (if implemented).

npm run build
Builds the app for production to the build/ folder.
It bundles React in production mode and optimizes the build.

npm run eject
Note: This is a one-way operation. You cannot undo it.
Use only if you need full control over the build configuration.

📚 Learn More
React Documentation

React Router Documentation

Create React App Docs

🔒 Disclaimer
This project is for educational purposes only.
Since there’s no backend or encryption, it is not production-ready.
Passwords and user info are stored in plaintext in the browser.

👨‍💻 Author
Manesh Kumar
[MERN Stack Developer]
Email: chmaneshkumar2002@gmail.com
GitHub: https://github.com/manesh0410


```bash
