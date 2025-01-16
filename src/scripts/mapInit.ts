import mapboxgl from "mapbox-gl";

export const initializeMap = (container: HTMLDivElement): mapboxgl.Map => {
    return new mapboxgl.Map({
        container, // Контейнер для карты
        style: "mapbox://styles/mapbox/dark-v11", // Стиль карты
        center: [0, 0], // Координаты центра карты
        zoom: 2, // Начальный зум
    });
};
