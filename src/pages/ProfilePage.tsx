import React from "react";
import Footer from "../components/Footer";
import AuthHeader from "../components/AuthHeader";
import { useLocation } from "react-router-dom";

const ProfilePage = () => {
  const location = useLocation()
  console.log(location.state)

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <AuthHeader user={location.state.user} authToken={location.state.authToken}/>
      <div className="p-8 grid grid-cols-2 gap-4 space-y-8 items-center bg-gray-background border border-gray-500">
        <p>Profile Picture</p>
        <img src="" alt="" />
        <p>Name</p>
        <p>{location.state.user.username}</p>
        <p>Email</p>
        <p>{location.state.user.email}</p>
      </div>

      <Footer />
    </div>
  )
}

export default ProfilePage;