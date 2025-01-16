import mapboxgl from "mapbox-gl";

/**
 * Добавить обработчик кликов на карте
 */
export const addClickHandler = (map: mapboxgl.Map) => {
    map.on("click", (event) => {
        const { lng, lat } = event.lngLat;
        console.log(`Координаты клика: Долгота ${lng}, Широта ${lat}`);

        // Пример добавления маркера
        new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
    });
};
