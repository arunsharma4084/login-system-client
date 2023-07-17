import React, { useState } from "react";
import ReactModal from "react-modal"
import { MdClose } from "react-icons/md";
import { useUserContext } from "../context/UserContext";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { User } from "../types/types";

type ProfileUpdateModalProps = {
  showModal: boolean,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  user: User
}

const ProfileUpdateModal: React.FC<ProfileUpdateModalProps> = ({showModal, setShowModal, user}) => {
  ReactModal.setAppElement('#root');
  const [newName, setNewName] = useState<string>("")
  const userContextValue = useUserContext()
  const auth = useAuthContext()
  const navigate = useNavigate()

  const profileUpdateHandler = () => {
    if(auth){
      userContextValue?.updateProfile(auth?.authToken, {username: newName})
        .then(() => {
          alert('Profile Updated Succesfully')
          navigate('/home')
        })
        .catch((e) => console.log("Error :", e))
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  return (
    <ReactModal
      isOpen={showModal}
      contentLabel="Update Profile Modal"
      onRequestClose={() => {
        setShowModal(false)
      }}
      className="z-50 w-fit h-fit mx-auto bg-gray-100 border border-gray-300 rounded-lg shadow-lg p-6 pt-8 relative"
      overlayClassName="z-50 fixed top-0 bottom-0 left-0 right-0 bg-white/80 grid place-content-center"
    >
      <div className="flex flex-col justify-center">
        <div className="flex space-x-2 items-center mb-3">
          <p className="italic">Old Name : </p>
          <p className="font-semibold text-xl">{user.username}</p>
        </div>
        <div className="flex space-x-2 items-center mb-4">
          <p className="italic">New Name :</p>
          <input 
            type="text"
            name="updated-name"
            placeholder="New Name"
            autoFocus={true}
            required={true}
            value={newName}
            onChange={handleInputChange}
            className="pointer-events-none px-[10px] text-sm leading-none border border-gray-300 py-1 rounded-lg bg-gray-50 outline-rose-500"
          />
        </div>
        <button className="px-3 py-2 bg-rose-500 text-white rounded-xl leading-none text-lg w-fit" onClick={profileUpdateHandler}>
          Update
        </button>
        <button
          className="absolute top-1 right-1 text-gray-400 hover:text-gray-900"
          onClick={() => {
            setShowModal(false)
          }}
        >
          <MdClose size={30}/>
        </button>
      </div>
    </ReactModal>
  )
}

export default ProfileUpdateModal;