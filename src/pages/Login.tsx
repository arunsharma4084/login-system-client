import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LogIn: React.FC = () => {
  const [logInData, setLogInData] = useState({
    email: "",
    password: "",
  })

  const [error, seterror] = useState('')
  const navigate = useNavigate()

  function onFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    navigate('/users/me', {replace: true})
  }

  return (
    <div id="login-form" onSubmit={onFormSubmit}>
      <div>
        <h2>Log In</h2>
        <div>
          <label>Email</label>
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            value={logInData.email}
            onChange={(e) => setLogInData((prev) => ({...prev, email: e.target.value}))}
            required />
        </div>

        <div>
          <label>Password</label>
          <input 
            type="password"
            placeholder="Password" 
            name="password"
            value={logInData.password}
            onChange={(e) => setLogInData((prev) => ({...prev, password: e.target.value}))}
            required />
        </div>

        <Link to={'/forgot-password'}><p>Forgot Password?</p></Link>

        <button form="login-form" type="submit" disabled>
          Log In
        </button>

        <p>Have not registered yet? Sign Up.</p>
      </div>
    </div>
  );
};

export default LogIn;
