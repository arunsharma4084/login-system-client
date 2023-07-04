import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { useUserContext } from "../context/UserContext";
import AuthHeader from "../components/AuthHeader";
import { useAuthContext } from "../context/AuthContext";
import { User } from "../types/types";

const UserDashboard: React.FC = () => {
  const [user, setUser] = useState({} as User | undefined)
  const auth = useAuthContext()
  const userContextValue = useUserContext()

  const getUser = async () => {
    const authToken = auth?.authToken
    if(authToken){
      const response = await userContextValue?.getUserProfile(authToken)
      return response
    } else{
      throw ("Could not get user info")
    }
  }

  useEffect(() => {
    getUser()
      .then((data) => setUser(data))
      .catch((e) => console.log(e))
  }, [auth])
  
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <AuthHeader />
      <div className="grid place-content-center p-10 bg-gray-background">
        <h3>Welcome to this login-system web app! {user?.username}</h3>
        {/* <Menu /> */}
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboard;
