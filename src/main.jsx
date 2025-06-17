import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ModalProvider } from "./context/ModalContext";

import { HomePage } from "./home";

import "./index.css";

createRoot(document.getElementById("root")).render(
    <ModalProvider>
        <HomePage />
    </ModalProvider>
);
