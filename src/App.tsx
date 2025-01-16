import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import "./styles/global.scss";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

export const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/homepage" />} />
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/aboutpage" element={<AboutPage />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/notfound" />} />
            </Routes>
        </Router>
    );
};
