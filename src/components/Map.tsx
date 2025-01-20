import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { useDispatch } from "react-redux";
import { addInteractiveMarkers } from "../scripts/mapHandlers";

import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

export const Map: React.FC = () => {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!mapContainer.current) return;

        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/dark-v11",
            center: [0, 0],
            zoom: 2,
        });

        // Подключаем обработчики для интерактивных маркеров
        addInteractiveMarkers(map, dispatch);

        return () => map.remove();
    }, [dispatch]);

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
