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
  const userContextValue = useUserContext()
  const navigate = useNavigate();
  console.log(user)
  console.log(auth)

  useEffect(() => {
    userContextValue?.getUserProfile(auth?.authToken)
      .then((res) => setUser(res))
      // .catch(() => {
      //   navigate('/login', {replace: true})
      // })
  }, [])
  
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
