import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

export const Map: React.FC = () => {
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
        <div
            ref={mapContainer}
            style={{
                width: "100%",
                height: "500px",
                marginTop: "1rem",
            }}
        />
    );
};
