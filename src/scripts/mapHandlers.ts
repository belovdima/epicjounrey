import mapboxgl from "mapbox-gl";
import { AppDispatch } from "../redux/store";
import { addMarker, removeMarker } from "../redux/slices/markersSlice";

interface MarkerData {
    id: string;
    lng: number;
    lat: number;
    description: string;
}

/**
 * Добавить маркер на карту
 */
export const addMarkerToMap = (
    map: mapboxgl.Map,
    lng: number,
    lat: number,
    description: string,
    onDelete: () => void
): mapboxgl.Marker => {
    // Создаём popup
    const popup = new mapboxgl.Popup({
        closeButton: true,
        closeOnClick: false, // Popup останется открытым при клике на маркер
    }).setHTML(`
        <div>
            <p>${description}</p>
            <button id="delete-marker-${lng}-${lat}">Удалить</button>
        </div>
    `);

    // Создаём маркер и связываем с popup
    const marker = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .setPopup(popup) // Привязываем popup к маркеру
        .addTo(map);

    // Обработчик для удаления маркера
    popup.on("open", () => {
        const deleteButton = document.getElementById(
            `delete-marker-${lng}-${lat}`
        );
        if (deleteButton) {
            deleteButton.onclick = (e) => {
                e.stopPropagation(); // Останавливаем всплытие
                onDelete();
                marker.remove(); // Удаляем маркер с карты
            };
        }
    });

    return marker;
};
export const addInteractiveMarkers = (
    map: mapboxgl.Map,
    dispatch: AppDispatch
) => {
    map.on("click", (event) => {
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
            dispatch(removeMarker(newMarker.id)); // Удаляем из Redux
        });

        // Обновляем Redux-состояние
        dispatch(addMarker(newMarker));
    });
};
