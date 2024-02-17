import React from "react";
import ReactDOM from "react-dom";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Manitne CSS
import '@mantine/core/styles.css';

ReactDOM.render(
  <BrowserRouter>
    <MantineProvider>
     <App/>
    </MantineProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
