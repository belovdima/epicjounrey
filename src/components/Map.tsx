import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { initializeMap } from "../scripts/mapInit";
import { addInteractiveMarkers } from "../scripts/mapHandlers";

import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

// Описываем тип для маркеров
interface MarkerData {
    id: string;
    lng: number;
    lat: number;
    description?: string;
}

export const Map: React.FC = () => {
    const mapContainer = useRef<HTMLDivElement | null>(null);

    // Указываем тип MarkerData[] для состояния
    const [markers, setMarkers] = useState<MarkerData[]>([]);

    useEffect(() => {
        if (!mapContainer.current) return;

        // Инициализация карты
        const map = initializeMap(mapContainer.current);

        // Добавляем обработчик для интерактивных маркеров
        addInteractiveMarkers(map, markers, setMarkers);

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
