import React, { useContext } from "react";
import logo from "../assets/images/vite.svg";
import coverImage from "../../public/images/background.jpg";

const LandingPage = () => {
  // const first = useContext(AuthContext);

  // if (first?.currentUser) {
  //   return <Navigate to="/dashboard" replace={true} />;
  // } else {
    return (
      <div>
        <div>
          <div>
            <img src={logo} alt="logo" />
            <h2>Taskify</h2>
          </div>
          <div>
            <button>Sign Up</button>
            <button>Log In</button>
          </div>
        </div>
      </div>
    );
  // }
};

export default LandingPage;
