import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import DataContextProvider from "./context/DataContext.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import "react-quill/dist/quill.snow.css";
// import "@/components/text-editor/test.css"
import "@/components/text-editor/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DataContextProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </DataContextProvider>
  </React.StrictMode>
);
