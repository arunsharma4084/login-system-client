import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface user {
  username: string,
  email: string,
  token: string,
  avatar: typeof Buffer | null,
  createdAt: Date,
  updatedAt: Date,
  _id: typeof ObjectId,
  __v: Number
}

const UserDashboard: React.FC = () => {
  const user = {
    username: "Arun Sharma",
    email: "arun@example.com",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDhhZjE1MjlhY2YzOTNhMzNkYzdmNGMiLCJpYXQiOjE2ODY4Mjg4Njd9.-zPs_RjNl2iWlqybHnZ1g2set5sx9f62C9xSuM2DiCw",
    avatar: null,
    _id: "648af1529acf393a33dc7f4c",
    __v: 4
  }

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />
      <div className="grid place-content-center bg-rose-100 p-10">
        Welcome to this login-system web app! {user.username}
      </div>
      <Footer />
    </div>
  );
}

export default UserDashboard;
