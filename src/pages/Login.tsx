import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "../components/Input";
import { clientAPI } from "../api/api";
import { useAuthContext } from "../context/AuthContext";
import { useUserContext } from "../context/UserContext";

const LogIn: React.FC = () => {
  const [logInData, setLogInData] = useState({
    email: "",
    password: "",
  });

  const auth = useAuthContext()
  const userContextValue = useUserContext()
  const [state, setState] = useState({error: "", loading: false});
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogInData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  async function onFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    setState({error: "", loading: true})

    userContextValue?.login(logInData)
      .then((data) => {
        auth?.setAuthentication(data)
        navigate('/users/me', {replace: true})
      }).catch((e) => {
        setState({error: e, loading: false})
      })
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
        <div className="text-rose-600">{state.error}</div>

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
            disabled={state.loading}
            className="rounded-lg bg-rose-500 px-3 pt-2 pb-3 text-center text-xl font-semibold leading-none text-white disabled:opacity-50"
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
