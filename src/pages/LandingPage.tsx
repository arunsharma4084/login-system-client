import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const LandingPage = () => {

    return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />
      <div className="bg-sky-200 mx-auto w-full h-full py-8 px-32">

      <h2 className="bg-sky-200">Login System App</h2>


      {/* <Menu /> */}

      </div>
      <Footer />
    </div>
  )
}

export default LandingPage;
