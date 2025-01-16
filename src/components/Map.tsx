import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { initializeMap } from "../scripts/mapInit";
import { addClickHandler } from "../scripts/mapHandlers";

import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

export const Map: React.FC = () => {
    const mapContainer = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!mapContainer.current) return;

        // Инициализация карты
        const map = initializeMap(mapContainer.current);

        // Добавляем обработчики событий
        addClickHandler(map);

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
