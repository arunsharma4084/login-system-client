import React, { useEffect } from "react";
import useAuthToken from "../hooks/useAuthToken";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const {authToken} = useAuthToken()
  const navigate = useNavigate()

  useEffect(() => {
    if(!authToken){
      navigate('/login', {replace: true})
    }
  }, [])

  return (
    <h2>Login System App</h2>
  )
}

export default LandingPage;
