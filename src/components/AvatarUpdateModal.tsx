import React, { useState } from "react";
import ReactModal from "react-modal"
import { useDropzone } from "react-dropzone";

type AvatarUpdateModalProps = {
  showModal: boolean,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const AvatarUpdateModal: React.FC<AvatarUpdateModalProps> = ({showModal, setShowModal}) => {
  ReactModal.setAppElement('#root');
  const [selectedFile, setSelectedFile] = useState<File>()
  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'image/*': []
    },
    maxFiles: 1,
    onDrop: (acceptedFile) => {
      console.log(acceptedFile)
      setSelectedFile(acceptedFile[0])
    }
  })
  return (
    <ReactModal
      isOpen={showModal}
      contentLabel="Update Profile Avatar Modal"
      onRequestClose={() => setShowModal(false)}
      className="z-50 w-fit h-fit mx-auto bg-gray-200 rounded-lg shadow-lg p-4"
      overlayClassName="z-50 fixed top-0 bottom-0 left-0 right-0 bg-white/80 grid place-content-center"
    >
      <div>
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} className="w-full h-16"/>
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
        <button onClick={() => setShowModal(false)}
          className="w-24 border bg-rose-500"
        >Close</button>
      </div>
    </ReactModal>
  )
}

export default AvatarUpdateModal;