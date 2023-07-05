import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AuthHeader from "../components/AuthHeader";
import Logo from "../components/Logo";

const LogOut = () => {
    return (
      <div className="grid grid-rows-[1fr_auto] min-h-screen">
        <div className="p-8 pt-16 flex flex-col space-y-16 items-center justify-start">
            <Logo />
            <div className="p-10 py-8 flex flex-col space-y-10 items-center border-2 border-gray-400 rounded-xl">
                <div className="text-2xl flex flex-col items-center">
                    <p>Are you sure you want to</p>
                    <p>log out?</p>
                </div>
                <button className="p-4 bg-rose-500 border border-gray-400 text-gray-50 rounded-xl px-8 text-xl leading-none w-full">Log Out</button>
            </div>
        </div>

        <Footer />
      </div>
  )
}

export default LogOut;