import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = { albums: [], isLoading: false, error: null };

// define and export albums async thunk below
export const getInitialStateAsync = createAsyncThunk(
    "albums/getInitialState",
    async (arg, thunkAPI) => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/albums"
            );
            console.log("Response status:", response.status);
            const data = await response.json();
            console.log(data);
            thunkAPI.dispatch(fetchSuccess(data));
            return data; // Return the data to indicate successful completion
        } catch (e) {
            thunkAPI.dispatch(fetchError());
            throw e; // Throw the error to indicate failure
        }
    }
);


const albumSlice = createSlice({
    name: "albums",
    initialState: INITIAL_STATE,
    reducers: {
        fetchStart: (state, action) => {
            state.isLoading = true;
        },
        fetchSuccess: (state, action) => {
            state.albums = action.payload;
            state.isLoading = false;
        },
        fetchError: (state, action) => {
            state.error = "Failed to fetch albums.";
            state.isLoading = false;
        },
        addAlbum: (state, action) => {
            state.albums.unshift(action.payload);
        },
        deleteAlbum: (state, action) => {
            const id = action.payload;
            state.albums = state.albums.filter((album) => album.id !== id);
        },
    }
});

export const albumReducer = albumSlice.reducer;

export const { fetchStart, fetchSuccess,
    fetchError, addAlbum, deleteAlbum } = albumSlice.actions;

export const albumSelector = (state) => state.albumReducer;