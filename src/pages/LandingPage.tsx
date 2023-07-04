import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LogInForm from "../components/LoginForm";
import Logo from "../components/Logo";

const LandingPage = () => {
    return (
      <div className="grid grid-rows-[1fr_auto] min-h-screen">
        {/* <Header /> */}
        <div className="mt-8 flex flex-col space-y-8 items-center">
        <Logo />
        <LogInForm />
        </div>

        <Footer />
      </div>
  )
}

export default LandingPage;
