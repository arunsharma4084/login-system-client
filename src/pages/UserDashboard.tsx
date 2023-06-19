import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

interface user {
  username: string;
  email: string;
  token: string;
  avatar: typeof Buffer | null;
  createdAt: Date;
  updatedAt: Date;
  _id: string;
  __v: Number;
}

const UserDashboard: React.FC = () => {

  useEffect(() => {

  }, [])

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />
      <div className="grid place-content-center bg-rose-100 p-10">
        Welcome to this login-system web app!
        <Menu />
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboard;
