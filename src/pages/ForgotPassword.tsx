import React from "react";
import { Link } from "react-router-dom"

const ForgotPassword: React.FC = () => {
  function onFormSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  return (
    <form action="" onSubmit={onFormSubmit}>
      <div>
        <h2>Reset Password</h2>

        <div>
          <label>Email</label>
          <input type="email" autoFocus placeholder="Email" required />
        </div>

        <button type="submit">
          Reset Password
        </button>
        <p>Log In</p>
        <p>
          Have not registered yet? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </form>
  );
};

export default ForgotPassword;
