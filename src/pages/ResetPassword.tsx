import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import { validateResetPasswordData } from "../utils/utils";
import { useUserContext } from "../context/UserContext";
import { useAuthContext } from "../context/AuthContext";

const ResetPassword: React.FC = () => {
  const [resetData, setResetData] = useState({
    newPassword: "",
    confirmNewPassword: ""
  });
  const [state, setState] = useState({error: "", loading: false});
  const userContextValue = useUserContext()
  const auth = useAuthContext()
  const navigate = useNavigate()

  function onFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log(resetData)
    setState({error: "", loading: true})

    const validationError = validateResetPasswordData(resetData)
    if(validationError){
      setState({error: validationError, loading: false})
    } else {
      auth && userContextValue?.updateProfile(auth?.authToken, {password: resetData.newPassword})
        .then(() => {
          alert("Password has been reset.")
          navigate('/home', {replace: true})
        }).catch((e) => {
          setState({error: e, loading: false})
        })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResetData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="grid grid-rows-[1fr_auto] min-h-screen">
      <div className="p-8 pt-16 flex flex-col space-y-16 items-center justify-start">
        <Logo />
        <div className="mx-auto w-[350px] max-w-xl rounded-xl border border-slate-900 p-6 selection:bg-rose-500 selection:text-white">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Reset Password
          </h2>
          <form
            action=""
            id="reset-password-form"
            onSubmit={onFormSubmit}
            className="space-y-7"
          >
            <div className="text-rose-600">{state.error}</div>

            <Input
              type="password"
              name="newPassword"
              autoFocus={false}
              value={resetData.newPassword}
              placeholder="New Password"
              required={true}
              handleChange={handleInputChange}
            ></Input>


            <Input
              type="password"
              name="confirmNewPassword"
              autoFocus={false}
              value={resetData.confirmNewPassword}
              placeholder="Confirm New Password"
              required={true}
              handleChange={handleInputChange}
            ></Input>

            <div className="flex flex-col items-center justify-center">
              <button
                form="reset-password-form"
                type="submit"
                disabled={state.loading}
                className="rounded-lg bg-rose-500 px-3 pt-2 pb-3 text-center text-xl font-semibold leading-none text-white"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default ResetPassword;
