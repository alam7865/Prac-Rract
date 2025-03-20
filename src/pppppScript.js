import React from "react";
import ReactDOM from "react-dom/client";
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello Sabaz Alam";
// console.log(heading);
// const root = document.getElementById("root");
// root.appendChild(heading);

// import { Header, Sum } from "./ppppp1";
// // import { Header } from "./ppppp1";
// // import { Sum } from "./ppppp1";
// console.log(Header);
// console.log(Sum);

import { Text } from "./ppppp1";
console.log(Text);

const AppLayout = () => {
  return <Text />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
