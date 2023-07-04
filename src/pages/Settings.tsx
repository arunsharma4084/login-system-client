import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Settings = () => {
    return (
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        <Header />
        <div className="mt-8 flex flex-col space-y-8 items-center">
            My Profile
        </div>

        <Footer />
      </div>
  )
}

export default Settings;