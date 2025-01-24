import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App";
import { Provider } from "./components/ui/provider";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import theme from "./theme";

const container = document.getElementById("root");

const root = createRoot(container!);

root.render(
    <React.StrictMode>
        <ChakraProvider value={theme}>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ChakraProvider>
        {/* <Provider> */}
        {/* </Provider> */}
    </React.StrictMode>,
);
