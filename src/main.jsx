import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> is a React Router component that allows you to define the base URL of your application. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
