import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "./styles/global.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const App: React.FC = () => {
    const mapContainer = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!mapContainer.current) return; // Убедимся, что контейнер существует

        // Инициализация карты
        const map = new mapboxgl.Map({
            container: mapContainer.current, // Указываем контейнер
            style: "mapbox://styles/mapbox/dark-v11", // Темный стиль карты
            center: [0, 0], // Координаты центра карты
            zoom: 2, // Начальный зум
        });

        // Очистка карты при размонтировании компонента
        return () => map.remove();
    }, []);

    return (
        <Router>
            <div className="app">
                <header className="app-header">
                    <h1>EpicJourney</h1>
                    <nav>
                        <Link to="/home">Home</Link> |{" "}
                        <Link to="/about">About</Link>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route
                            path="/home"
                            element={
                                <div>
                                    <h2>Welcome to EpicJourney</h2>
                                    <div
                                        ref={mapContainer}
                                        style={{
                                            width: "100%",
                                            height: "500px",
                                            marginTop: "1rem",
                                        }}
                                    />
                                </div>
                            }
                        />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
