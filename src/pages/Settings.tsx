import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";

const Settings = () => {
  const location = useLocation()
  console.log(location.state)

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-gray-background">
      <AuthHeader user={location.state.user} authToken={location.state.authToken}/>
      <div className="">
        Your Settings
      </div>
      <Footer />
    </div>
  )
}

export default Settings;