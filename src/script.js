import React from "react";
import ReactDOM from "react-dom/client";
import HeaderCom from "./HeaderCom";

const AppLayout = () => (
  <>
    <HeaderCom />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
