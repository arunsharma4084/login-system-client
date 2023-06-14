import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/UserDashboard";
import "./index.css";
import AppRouter from "./router/AppRouter";

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
