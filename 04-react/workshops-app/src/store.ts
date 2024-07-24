import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/theme";

// slice is a small piece of the state. All slices put together manage the state of the entire app.
const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
    },
});

export default store;
