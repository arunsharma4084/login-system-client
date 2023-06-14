import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ErrorPage: React.FC = (): JSX.Element => {
  return (
    <div>
      <Header />
      <div>
        <div>
          <h2>Oops!</h2>
          <p>There is nothing here.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
