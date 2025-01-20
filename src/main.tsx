// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "mapbox-gl/dist/mapbox-gl.css";

createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
