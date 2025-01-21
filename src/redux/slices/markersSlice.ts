import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Marker {
    id: string;
    lng: number;
    lat: number;
    description: string;
}

interface MarkersState {
    markers: Marker[];
}

const initialState: MarkersState = {
    markers: [],
};

const markersSlice = createSlice({
    name: "markers",
    initialState,
    reducers: {
        addMarker: (state, action: PayloadAction<Marker>) => {
            state.markers.push(action.payload);
        },
        updateMarker: (state, action: PayloadAction<{ id: string; description: string }>) => {
            const marker = state.markers.find((m) => m.id === action.payload.id);
            if (marker) {
                marker.description = action.payload.description;
            }
        },
        removeMarker: (state, action: PayloadAction<string>) => {
            state.markers = state.markers.filter((m) => m.id !== action.payload);
        },
    },
});

export const { addMarker, updateMarker, removeMarker } = markersSlice.actions;
export default markersSlice.reducer;

