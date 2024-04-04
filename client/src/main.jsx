import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "animate.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// Define custom breakpoints
const breakpoints = {
  base: "0px",
  xsm: "320px",
  ssm: "510px", // Added "px" unit here
  sm: "660px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  xxl: "1536px",
  xxxl: "1950px", // Added "px" unit here
};

import "./styles/styles.css"; // Import your CSS file

// Extend Chakra UI theme with custom breakpoints and background color
const theme = extendTheme({
  breakpoints,
  styles: {
    global: {
      html: {
        height: "100%",
        width: "100%",
      },
      body: {
        height: "100%",
        width: "100%",

        backgroundRepeat: "no-repeat",
      },
    },
  },
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root"),
);
