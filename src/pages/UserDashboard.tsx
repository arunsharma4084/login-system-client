import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { useUserContext } from "../context/UserContext";
import AuthHeader from "../components/AuthHeader";
import { useAuthContext } from "../context/AuthContext";
import { User } from "../types/types";
import { useNavigate } from "react-router-dom";

const UserDashboard: React.FC = () => {
  const [user, setUser] = useState({} as User)
  const auth = useAuthContext()
  const [authToken, setAuthToken] = useState(auth?.authToken)
  const userContextValue = useUserContext()
  const navigate = useNavigate();
  console.log(user)
  console.log(auth)

  useEffect(() => {
    console.log("sdhgjuhg")
    setAuthToken(auth?.authToken)
    authToken && userContextValue?.getUserProfile(authToken)
      .then((res) => setUser(res))
      .catch((e) => {
        // navigate('/login', {replace: true})
        console.log("Error: ", e)
      })
  }, [authToken])
  
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <AuthHeader />
      <div className="grid place-content-center p-10 bg-sky-200">
        <h3>Welcome to this login-system web app! {user?.username}</h3>
        <Menu />
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboard;
