import mapboxgl from "mapbox-gl";
import { AppDispatch } from "../redux/store";
import { addMarker } from "../redux/slices/markersSlice";

interface MarkerData {
    id: string;
    lng: number;
    lat: number;
    description?: string;
}

/**
 * Добавить маркер на карту
 */
export const addMarkerToMap = (
    map: mapboxgl.Map,
    lng: number,
    lat: number,
    description?: string,
    onClick?: () => void
): mapboxgl.Marker => {
    const marker = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .setPopup(
            new mapboxgl.Popup().setHTML(`<p>${description || "Маркер"}</p>`)
        )
        .addTo(map);

    if (onClick) {
        // Добавляем обработчик клика на сам маркер
        marker.getElement().addEventListener("click", (e) => {
            e.stopPropagation(); // Остановить всплытие события, чтобы карта не обрабатывала этот клик
            onClick();
        });
    }

    return marker;
};

/**
 * Обработчик кликов для добавления маркеров
 */
export const addInteractiveMarkers = (
    map: mapboxgl.Map,
    dispatch: AppDispatch
) => {
    map.on("click", (event) => {
        event.preventDefault();
        const { lng, lat } = event.lngLat;

        const id = `${lng}-${lat}-${Date.now()}`;
        const newMarker: MarkerData = {
            id,
            lng,
            lat,
            description: "Новый маркер",
        };

        // Добавляем маркер на карту
        addMarkerToMap(map, lng, lat, newMarker.description, () => {
            console.log(`Клик по маркеру: ${newMarker.id}`);
            // Здесь можно реализовать, например, открытие формы редактирования
        });

        // Обновляем Redux-состояние
        dispatch(addMarker(newMarker));
    });
};
