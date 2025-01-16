import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.scss";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

export const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/aboutpage" element={<AboutPage />} />
                <Route path="*" element={<HomePage />} />
                <Route path="/notfound" element={<NotFound />} />
            </Routes>
        </Router>
    );
};
