import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "react-quill/dist/quill.snow.css";
import "./index.css";
import DataContextProvider from "./context/DataContext.tsx";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DataContextProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </DataContextProvider>
  </React.StrictMode>
);
