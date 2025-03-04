import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./themes";

const container = document.getElementById("root");

const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
