import mapboxgl from "mapbox-gl";

interface MarkerData {
    id: string;
    lng: number;
    lat: number;
    description?: string;
}

/**
 * Добавить маркер на карту
 */
export const addMarker = (
    map: mapboxgl.Map,
    lng: number,
    lat: number,
    description?: string
): mapboxgl.Marker => {
    const marker = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .setPopup(
            new mapboxgl.Popup().setHTML(`<p>${description || "Маркер"}</p>`)
        )
        .addTo(map);

    return marker;
};

/**
 * Обработчик кликов для добавления маркеров
 */

export const addInteractiveMarkers = (
    map: mapboxgl.Map,
    markers: MarkerData[],
    setMarkers: React.Dispatch<React.SetStateAction<MarkerData[]>>
) => {
    map.on("click", (event) => {
        event.preventDefault(); // Предотвращаем потенциальное поведение по умолчанию
        const { lng, lat } = event.lngLat;

        const id = `${lng}-${lat}-${Date.now()}`;
        const newMarker: MarkerData = {
            id,
            lng,
            lat,
            description: "Новый маркер",
        };

        // Добавляем маркер на карту
        addMarker(map, lng, lat, newMarker.description);

        // Обновляем состояние маркеров
        setMarkers((prev) => [...prev, newMarker]);
    });
};
