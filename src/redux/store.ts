import { configureStore } from "@reduxjs/toolkit";
import markersReducer from "./slices/markersSlice";

export const store = configureStore({
    reducer: {
        markers: markersReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
