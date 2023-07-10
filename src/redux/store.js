import { configureStore } from "@reduxjs/toolkit";

const { albumReducer } = require('./albumsReducer');

export const store = configureStore({
    reducer: { albumReducer }
});