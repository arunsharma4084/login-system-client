import React, { useState } from "react";
import { clientAPI } from "../api/api"
import { useNavigate, Link } from "react-router-dom";
import { validateData } from "../utils/utils";

const SignUp: React.FC = () => {
  const [signUpData, setSignUpData] = useState({
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
  })

  console.log(signUpData.username)

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  async function onFormSubmit(event: React.FormEvent) {
    event.preventDefault();

    console.log(error)
    setError("")
    setError(validateData(signUpData))

    if(!error){
      console.log(error)
      try {
        const response = await clientAPI.post('/users', signUpData)
        console.log(response)
      } catch (e: any){
        console.log("Error: ", e)
        if(e.response.data.code === 11000){
          setError("User with this email already exists.")
        } else {
          setError("Could not create account. Please try again")
        }
      }
    }  
  }

  return (
    <div className="border w-[350px] max-w-xl rounded-xl border-slate-900 mx-auto mt-10 p-6 selection:bg-rose-500 selection:text-white">

      <h2 className="mb-6 font-bold text-3xl text-center text-gray-900">Sign Up</h2>

      <form action="" id="signup-form" onSubmit={onFormSubmit} className="space-y-7">
          <div className="text-rose-600">{error}</div>

          <div className="flex flex-col space-y-1 relative">
            <input 
              type="text" 
              name="user-name"
              autoFocus 
              value={signUpData.username}
              onChange={(e) => setSignUpData((prev) => ({...prev, username: e.target.value }))}
              placeholder="Name" 
              required
              className="styled-input peer" />
            <label className="styled-label" htmlFor="user-name">Name</label>
          </div>

          <div className="flex flex-col space-y-1 relative">
            <input 
              type="email" 
              name="email"
              placeholder="Email" 
              value={signUpData.email}
              onChange={(e) => setSignUpData((prev) => ({...prev, email: e.target.value}))}
              required
              className="styled-input peer" />
            <label className="styled-label" htmlFor="email">Email</label>
          </div>

          <div className="flex flex-col space-y-1 relative">
            <input 
              type="password"
              placeholder="Password" 
              name="password"
              value={signUpData.password}
              onChange={(e) => setSignUpData((prev) => ({...prev, password: e.target.value}))}
              required
              className="styled-input peer" />
            <label className="styled-label" htmlFor="password">Password</label>
          </div>

          <div className="flex flex-col space-y-1 relative">
            <input 
              type="password"
              placeholder="Confirm Password" 
              name="confirm-password"
              value={signUpData.confirmPassword}
              onChange={(e) => setSignUpData((prev) => ({...prev, confirmPassword: e.target.value}))}
              required
              className="styled-input peer" />
            <label className="styled-label" htmlFor="confirm-password">Confirm Password</label>
          </div>

          <div className="flex flex-col items-center justify-center">
            <button form="signup-form" type="submit" className="bg-rose-500 px-3 pt-2 pb-3 text-white text-xl rounded-lg text-center leading-none font-semibold">
            Sign Up
            </button>
          </div>

      </form>

      <div className="flex flex-col items-center justify-center">
        <p className="mt-4">Already have an account? 
          <span className="ml-1 text-lg leading-none px-1 pb-1 rounded-md text-violet-700 underline italic">
          <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
