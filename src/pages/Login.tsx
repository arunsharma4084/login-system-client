import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "../components/Input";

const LogIn: React.FC = () => {
  const [logInData, setLogInData] = useState({
    email: "",
    password: "",
  });

  const [error, seterror] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogInData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  function onFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    navigate("/users/me", { replace: true });
  }

  return (
    <div className="mx-auto mt-10 w-[350px] max-w-xl rounded-xl border border-slate-900 p-6 selection:bg-rose-500 selection:text-white">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
        Log In
      </h2>

      <form
        action=""
        id="login-form"
        onSubmit={onFormSubmit}
        className="space-y-7"
      >
        <div className="text-rose-600">{error}</div>

        <Input
          type="email"
          name="email"
          autoFocus={false}
          value={logInData.email}
          placeholder="Email"
          required={true}
          handleChange={handleInputChange}
        ></Input>

        <Input
          type="password"
          name="password"
          autoFocus={false}
          value={logInData.password}
          placeholder="Password"
          required={true}
          handleChange={handleInputChange}
        ></Input>

        <Link to={"/forgot-password"}>
          <p className="mt-1 italic leading-none text-violet-500 underline">
            Forgot Password?
          </p>
        </Link>

        <div className="flex flex-col items-center justify-center">
          <button
            form="login-form"
            type="submit"
            className="rounded-lg bg-rose-500 px-3 pt-2 pb-3 text-center text-xl font-semibold leading-none text-white"
          >
            Login
          </button>
        </div>
      </form>

      <div className="flex flex-col items-center justify-center">
        <p className="mt-4">
          Do not have an account yet?
          <span className="ml-1 px-1 pb-1 text-lg italic leading-none text-violet-700 underline">
            <Link to="/signup">Sign Up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
