import React, { useRef, useState } from "react";
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
  const editorRef = useRef<AvatarEditor>(null)
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


  function dataURLtoBlob(dataurl: any) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
  }

  const avatarUploadHandler = () => {
    const avatarData = new FormData()
    if(selectedFile && auth){
      const data = editorRef.current?.getImageScaledToCanvas().toDataURL()
      const toUploadFile = dataURLtoBlob(data)

      avatarData.append('avatar', toUploadFile ? toUploadFile : selectedFile, selectedFile.name)
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
            ref={editorRef}
            image={selectedFile ? selectedFile : ""}
            width={240}
            height={240}
            border={0}
            borderRadius={120}
            color={[255, 255, 255, 0.6]} // RGBA
            scale={avatarState.scale}
            rotate={avatarState.rotate}
            className="border border-gray-400 mb-2 self-center"
          />

          { selectedFile && <p className="text-lg mb-2 self-center">File Name - {selectedFile?.name}</p>}
          <div className="flex space-x-3 mb-2">
            <p className="italic">Zoom :</p>
            <input type="range" min={100} max={200} className="w-fit"
              onChange={(e) => setAvatarState((prev) => {
                return {...prev, scale: parseInt(e.target.value) / 100}
              })} 
            />
          </div>
          <div className="flex space-x-3 items-center mb-2">
            <p className="italic">Rotate :</p>
            <button className="p-1 bg-gray-700 rounded text-white">
              <MdRotateLeft size={25} onClick={() => setAvatarState((prev) => ({...prev, rotate: prev.rotate - 90}))}/>
            </button>
            <button className="p-1 bg-gray-700 rounded text-white">
              <MdRotateRight size={25} onClick={() => setAvatarState((prev) => ({...prev, rotate: prev.rotate + 90}))}/>
            </button>
          </div>
          
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