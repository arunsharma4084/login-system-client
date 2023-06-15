import React, { useState } from "react";
import { clientAPI } from "../api/api";
import { useNavigate, Link } from "react-router-dom";
import { validateData } from "../utils/utils";
import Input from "../components/Input";

const SignUp: React.FC = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function onFormSubmit(event: React.FormEvent) {
    event.preventDefault();

    setError("");
    setLoading(true)
    setError(validateData(signUpData));

    if (!error) {
      try {
        console.log(signUpData)
        const response = await clientAPI.post("/users", signUpData);
        console.log(response);
        setLoading(false)
        navigate('/login', {replace: true})
      } catch (e: any) {
        console.log("Error: ", e);
        if (e.response.data.code === 11000) {
          setError("User with this email already exists.");
        } else {
          setError("Could not create account. Please try again");
        }
        setLoading(true)
      }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="mx-auto mt-10 w-[350px] max-w-xl rounded-xl border border-slate-900 p-6 selection:bg-rose-500 selection:text-white">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
        Sign Up
      </h2>

      <form
        action=""
        id="signup-form"
        onSubmit={onFormSubmit}
        className="space-y-7"
      >
        <div className="text-rose-600">{error}</div>

        <Input
          type="text"
          name="username"
          autoFocus={true}
          value={signUpData.username}
          placeholder="Name"
          required={true}
          handleChange={handleInputChange}
        ></Input>

        <Input
          type="email"
          name="email"
          autoFocus={false}
          value={signUpData.email}
          placeholder="Email"
          required={true}
          handleChange={handleInputChange}
        ></Input>

        <Input
          type="password"
          name="password"
          autoFocus={false}
          value={signUpData.password}
          placeholder="Password"
          required={true}
          handleChange={handleInputChange}
        ></Input>

        <Input
          type="password"
          name="confirmPassword"
          autoFocus={false}
          value={signUpData.confirmPassword}
          placeholder="Confirm Password"
          required={true}
          handleChange={handleInputChange}
        ></Input>

        <div className="flex flex-col items-center justify-center">
          <button
            form="signup-form"
            type="submit"
            disabled={loading}
            className="rounded-lg bg-rose-500 px-3 pt-2 pb-3 text-center text-xl font-semibold leading-none text-white"
          >
            Sign Up
          </button>
        </div>
      </form>

      <div className="flex flex-col items-center justify-center">
        <p className="mt-4">
          Already have an account?
          <span className="ml-1 px-1 pb-1 text-lg italic leading-none text-violet-700 underline">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
