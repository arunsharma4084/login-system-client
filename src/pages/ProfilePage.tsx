import React from "react";
import Footer from "../components/Footer";
import AuthHeader from "../components/AuthHeader";
import { useLocation } from "react-router-dom";

const ProfilePage = () => {
  const location = useLocation()
  console.log(location.state)

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-gray-background">
      <AuthHeader user={location.state.user} authToken={location.state.authToken}/>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl my-8 mx-auto w-100">Your Profile</h1>
        <div className="mx-8 grid grid-cols-[250px_minmax(300px,_1fr)] auto-rows-max place-center w-fit justify-self-center items-center border bg-gray-background shadow-lg rounded-xl">
          <div className="grid place-content-center border border-transparent h-full text-center border-r-gray-300 border-b-gray-300">
            <p className="text-2xl h-full text-center">Profile Picture</p>
          </div>
          <div className="p-8 border border-b-gray-300 grid place-content-center">
            <img 
              src={location.state.user?.avatar ? `data:image/jpeg;base64,${location.state.user?.avatar}` : "/images/empty-avatar.png"}
              alt="user avatar"
              width={200}
              height={200}
              tabIndex={0}
              className="rounded-full border border-gray-500 object-contain object-center"
            />
          </div>
            <p className="p-8 border border-transparent border-r-gray-300 border-b-gray-300 text-2xl h-full text-center">Name</p>
            <p className="p-8 border border-transparent border-r-gray-300 border-b-gray-300 text-2xl h-full text-center">{location.state.user.username}</p>
            <p className="p-8 border border-transparent border-r-gray-300 border-b-gray-300 text-2xl h-full text-center">Email</p>
            <p className="p-8 border border-transparent border-r-gray-300 border-b-gray-300 text-2xl h-full text-center">{location.state.user.email}</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProfilePage;