import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AuthHeader from "../components/AuthHeader";
import Logo from "../components/Logo";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const LogOut = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const userContextValue = useUserContext()
  const [error, setError] = useState("")

  const logOutHandler = async () => {
    userContextValue?.logout(location.state.authToken)
    .then(() => {
      navigate('/', {replace: true})
    }).catch((e) => {
      setError(e)
    })
  }

  const logOutAllHandler = async () => {
    userContextValue?.logoutAll()
    .then(() => {
      navigate('/', {replace: true})
    }).catch((e) => {
      setError(e)
    })
  }

  return (
    <div className="grid grid-rows-[1fr_auto] min-h-screen">
      <div className="p-8 pt-16 flex flex-col space-y-16 items-center justify-start">
        <Logo />
        <div className="px-10 py-8 flex flex-col space-y-10 items-center border-2 border-gray-400 rounded-xl">
          <div className="text-2xl flex flex-col items-center">
          {error && <p className="text-red-700 text-lg mb-2">{error}</p>}
            <p>Are you sure you want to</p>
            <p>log out?</p>
          </div>
          <div>
            <button 
              className="p-4 bg-rose-500 border border-gray-400 text-gray-50 rounded-xl text-xl leading-none w-full"
              onClick={logOutHandler}
            >
              Log Out
            </button>
            <button className="mt-3 px-1 text-lg italic leading-none text-violet-700 underline" onClick={logOutAllHandler}>
              Log Out from All Devices
            </button>
          </div>
        </div>
      </div>
      <Footer />
      </div>
  )
}

export default LogOut;