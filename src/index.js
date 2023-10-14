import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./css/404ErrorStyle.css";
import "./css/animate.min.css";
import "./css/bootstrap.min.css";
import "./css/flaticon.css";
import "./css/fontawesome-all.min.css";
import "./css/magnific-popup.css";
import "./css/nice-select.css";
import "./css/owl.carousel.min.css";
import "./css/price_rangs.css";
import "./css/responsive.css";
import "./css/slick.css";
import "./css/slicknav.css";
import "./css/style.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import 'semantic-ui-css/semantic.min.css'

// contexts

import { AuthProvider } from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <ChakraProvider>
    <React.StrictMode>
      <AuthProvider>
      <App />
      </AuthProvider>
    </React.StrictMode>
    </ChakraProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
