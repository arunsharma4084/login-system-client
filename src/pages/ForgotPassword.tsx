import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");

  function onFormSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="mx-auto mt-10 w-[350px] max-w-xl rounded-xl border border-slate-900 p-6 selection:bg-rose-500 selection:text-white">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
        Forgot Password
      </h2>
      <form
        action=""
        id="forgot-password-form"
        onSubmit={onFormSubmit}
        className="space-y-7"
      >
        <Input
          type="email"
          name="email"
          autoFocus={true}
          value={email}
          placeholder="Email"
          required={true}
          handleChange={handleInputChange}
        ></Input>

        <div className="flex flex-col items-center justify-center">
          <button
            form="forgot-password-form"
            type="submit"
            className="rounded-lg bg-rose-500 px-3 pt-2 pb-3 text-center text-xl font-semibold leading-none text-white"
          >
            Reset Password
          </button>
        </div>
      </form>

      <div className="mt-6 flex justify-between">
        <Link
          to="/signup"
          className="text-lg italic leading-none text-violet-700 underline"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="text-lg italic leading-none text-violet-700 underline"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
