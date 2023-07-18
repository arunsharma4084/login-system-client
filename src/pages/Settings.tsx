import React, { useState } from "react";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";
import { MdEdit } from "react-icons/md";
import AvatarUpdateModal from "../components/AvatarUpdateModal";
import ProfileUpdateModal from "../components/ProfileUpdateModal";
import { useUserContext } from "../context/UserContext";
import { useAuthContext } from "../context/AuthContext";

const Settings = () => {
  const location = useLocation()
  const [showModal, setShowModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const navigate = useNavigate()
  const userContextValue = useUserContext()
  const auth = useAuthContext()

  const logOutHandler = async () => {
    userContextValue?.logout(location.state.authToken)
    .then(() => {
      auth?.removeAuthentication()
      navigate('/', {replace: true})
    }).catch((e) => console.log(e))
  }

  const logOutAllHandler = async () => {
    userContextValue?.logoutAll(location.state.authToken)
    .then(() => {
      auth?.removeAuthentication()
      navigate('/', {replace: true})
    }).catch((e) => console.log(e))
  }

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-gray-background">
      <AuthHeader user={location.state.user} authToken={location.state.authToken}/>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl my-8 mx-auto w-100">Your Settings</h1>
        <div className="relative -z-0">
          <img 
            src={location.state.user?.avatar ? `data:image/jpeg;base64,${location.state.user?.avatar}` : "/images/empty-avatar.png"}
            alt="user avatar"
            width={225}
            height={225}
            tabIndex={0}
            className="rounded-full border border-gray-500 object-contain object-center -z-0"
          />
          <button 
            className="flex items-center space-x-1 bg-white border border-gray-400 absolute bottom-4 right-2 p-1 rounded -z-0"
            onClick={() => setShowModal(true)}
          >
            <MdEdit size={20} />
            <p className="leading-none">Edit</p>
          </button>
        </div>

        <div className="border border-gray-400 my-8 rounded-xl flex flex-col">
          <div className="p-6 py-5 border border-transparent flex space-x-2 justify-center items-center border-b-gray-400">
            <p className="text-2xl">Name :  {location.state.user.username}</p>
            <button 
              className="text-center text-indigo-800 leading-none mt-1"
              onClick={() => setShowProfileModal(true)}
            >{"(change)"}</button>
          </div>
          <div className="p-6 py-5 border flex space-x-2 justify-center items-center border-b-gray-400">
            <p className="text-2xl">Email :  {location.state.user.email}</p>
          </div>
          <button className="p-6 py-5 border border-b-gray-400 text-2xl border-transparent w-full text-start" onClick={() => navigate('/users/me/reset-password')}>Reset Password</button>
          <button className="p-6 py-5 border border-b-gray-400 text-2xl border-transparent w-full text-start" onClick={logOutHandler}>Log Out</button>
          <button className="p-6 py-5 text-2xl border-transparent w-full text-start" onClick={logOutAllHandler}>Log Out from All Devices</button>
        </div>
      </div>
      <Footer />
      <AvatarUpdateModal 
        showModal={showModal} 
        setShowModal={setShowModal} 
      />
      <ProfileUpdateModal 
        showModal={showProfileModal} 
        setShowModal={setShowProfileModal} 
        user={location.state.user}
      />
    </div>
  )
}

export default Settings;