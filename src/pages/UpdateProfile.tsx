import React, { useState } from "react";
import Footer from "../components/Footer";
import AuthHeader from "../components/AuthHeader";
import { useLocation } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import AvatarUpdateModal from "../components/AvatarUpdateModal";

const UpdateProfile = () => {
  const location = useLocation()
  console.log(location.state)
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-gray-background relative">
      <AuthHeader user={location.state.user} authToken={location.state.authToken}/>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl my-8 mx-auto w-100">Update Your Profile</h1>
        <div className="mx-8 grid grid-cols-[250px_minmax(300px,_1fr)] auto-rows-max place-center w-fit justify-self-center items-center border bg-gray-background shadow-lg rounded-xl">
          <div className="grid place-content-center border border-transparent h-full text-center border-r-gray-300 border-b-gray-300">
            <p className="text-2xl h-full text-center">Profile Picture</p>
          </div>
          <div className="p-8 border border-transparent border-b-gray-300 grid place-content-center relative -z-0">
            <img 
              src={location.state.user?.avatar ? `data:image/jpeg;base64,${location.state.user?.avatar}` : "/images/empty-avatar.png"}
              alt="user avatar"
              width={200}
              height={200}
              tabIndex={0}
              className="rounded-full border border-gray-500 object-contain object-center -z-0"
            />
            <button 
              className="flex items-center space-x-1 bg-white border border-gray-400 absolute bottom-10 right-10 p-1 rounded -z-0"
              onClick={() => setShowModal(true)}
            >
              <MdEdit size={20} />
            <p className="leading-none">Edit</p>
          </button>
          </div>
            <p className="p-8 border border-transparent border-r-gray-300 border-b-gray-300 text-2xl h-full text-center">Name</p>
            <div className="flex p-8 border border-transparent border-b-gray-300 h-full justify-center space-x-2 items-center">
              <p className=" text-center text-2xl leading-none">{location.state.user.username}</p>
              <a href="" className="text-center text-indigo-800 leading-none mt-1">{"(change)"}</a>
            </div>
            <p className="p-8 border border-transparent border-r-gray-300 text-2xl h-full text-center">Email</p>
            <p className="p-8 text-2xl h-full text-center">{location.state.user.email}</p>
        </div>
      </div>
      <Footer />
      <AvatarUpdateModal 
        showModal={showModal} 
        setShowModal={setShowModal} 
      />
    </div>
  )
}

export default UpdateProfile;