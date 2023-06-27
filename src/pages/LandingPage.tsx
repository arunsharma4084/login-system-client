import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LandingPage = () => {

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />
      <h2 className="bg-sky-200">Login System App</h2>
      <Footer />
    </div>
  )
}

export default LandingPage;
