import React, { useState } from "react";
import ReactModal from "react-modal"
import { useDropzone } from "react-dropzone";
import { MdClose, MdRotateLeft, MdRotateRight } from "react-icons/md";
import AvatarEditor, { AvatarEditorProps } from 'react-avatar-editor'
import { useUserContext } from "../context/UserContext";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

type AvatarUpdateModalProps = {
  showModal: boolean,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

// type AvatarEditorState = {
//   scale: number,
//   rotate: number
// }

const AvatarUpdateModal: React.FC<AvatarUpdateModalProps> = ({showModal, setShowModal}) => {
  ReactModal.setAppElement('#root');
  const [selectedFile, setSelectedFile] = useState<File>()
  const [avatarState, setAvatarState] = useState({
    scale: 1,
    rotate: 0
  })
  const userContextValue = useUserContext()
  const auth = useAuthContext()
  const navigate = useNavigate()
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

  const avatarUploadHandler = () => {
    const avatarData = new FormData()
    if(selectedFile && auth){
      avatarData.append('avatar', selectedFile, selectedFile.name)
      userContextValue?.updateAvatar(auth?.authToken, avatarData)
        .then(() => {
          alert('Avatar Updated Succesfully')
          navigate('/home')
        }).catch((e) => console.log(e))
    }
    console.log(avatarData, typeof avatarData)
  }

  return (
    <ReactModal
      isOpen={showModal}
      contentLabel="Update Profile Avatar Modal"
      onRequestClose={() => {
        setSelectedFile(undefined)
        setShowModal(false)
      }}
      className="z-50 w-fit h-fit mx-auto bg-gray-100 border border-gray-300 rounded-lg shadow-lg p-6 pt-8 relative"
      overlayClassName="z-50 fixed top-0 bottom-0 left-0 right-0 bg-white/80 grid place-content-center"
    >
      <div className="grid grid-cols-2 gap-4">
        <div {...getRootProps({className: 'w-fit border-2 border-gray-400 border-dashed hover:border-sky-500 p-4 py-16 grid place-content-center'})}>
          <input {...getInputProps()} className=""/>
          <p className="text-lg leading-none">Drag 'n' drop your image here, </p>
          <p className="text-lg leading-none">or click to select a file</p>
        </div>
        <div className="px-4 flex flex-col">
          <AvatarEditor 
            image={selectedFile ? selectedFile : ""}
            width={240}
            height={240}
            border={0}
            borderRadius={120}
            color={[255, 255, 255, 0.6]} // RGBA
            scale={avatarState.scale}
            rotate={avatarState.rotate}
            className="border border-gray-400 mb-2"
          />
          <div className="flex">
            <MdRotateLeft onClick={() => setAvatarState((prev) => ({...prev, rotate: prev.rotate - 90}))}/>
            <p>Zoom :</p>
            <input type="range" min={100} max={200} 
              onChange={(e) => setAvatarState((prev) => {
                console.log(e.target)
                // return {...prev, scale: e.target.value / 100}
                return prev
              })} 
            />
            <MdRotateRight onClick={() => setAvatarState((prev) => ({...prev, rotate: prev.rotate + 90}))}/>
          </div>
          <div className="flex">
            <p>Rotate : </p>
            <button className="p-1 bg-gray-100 rounded-sm">
              <MdRotateLeft size={25} onClick={() => setAvatarState((prev) => ({...prev, rotate: prev.rotate - 90}))}/>
            </button>
            
            <MdRotateRight onClick={() => setAvatarState((prev) => ({...prev, rotate: prev.rotate + 90}))}/>
          </div>
          <p className="text-lg mb-4">File Name - {selectedFile?.name}</p>
          <button className="p-2 bg-rose-500 text-white rounded-xl text-lg" onClick={avatarUploadHandler}>Upload Image</button>
          <button
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-900"
            onClick={() => {
              setSelectedFile(undefined)
              setShowModal(false)
            }}
          >
            <MdClose size={30}/>
          </button>
        </div>
      </div>
    </ReactModal>
  )
}

export default AvatarUpdateModal;