import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function UserDashboard(): JSX.Element {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />
      <div className="grid place-content-center bg-rose-100 p-10">
        Welcome to this login-system web app!
      </div>
      <Footer />
    </div>
  );
}

export default UserDashboard;
