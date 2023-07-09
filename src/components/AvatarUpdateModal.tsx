import React, { useState } from "react";
import ReactModal from "react-modal"

type AvatarUpdateModalProps = {
  showModal: boolean,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const AvatarUpdateModal: React.FC<AvatarUpdateModalProps> = ({showModal, setShowModal}) => {
  

  return (
    <ReactModal
      isOpen={showModal}
      contentLabel="Update Profile Avatar Modal"
      ariaHideApp={false}
      className="z-50 fixed w-full bg-white rounded-lg shadow-lg"
      overlayClassName={"z-50 absolute right-1/2 w-1/2 top-1/2 bg-black/50 rounded-lg shadow-lg"}
    >
      <button onClick={() => setShowModal(false)}
        className="w-1/2 h-32"
      >Close</button>

    </ReactModal>
  )
}

export default AvatarUpdateModal;