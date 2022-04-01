import { App } from "./routes/App";
import React from 'react';
import { createRoot } from "react-dom/client";
import './styles/global.css'
import { AppProvider } from "./context/AppContext";
createRoot(
    document.getElementById("root")
).render(
    <AppProvider>
        <App />
    </AppProvider>
);
