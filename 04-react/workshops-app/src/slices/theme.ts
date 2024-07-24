import { createSlice } from "@reduxjs/toolkit";

// like creating a reducer
const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value: "light",
    },
    reducers: {
        // increment() { // { type: 'theme/increment' }

        // },

        // decrement() {

        // }

        // { type: 'theme/toggleTheme', }
        // The state we receive is a "draft state" object
        toggleTheme(state) {
            state.value = state.value === "light" ? "dark" : "light";
        },
    },
});

// action objects will be created with names using of the reducers.<methods>
const { toggleTheme } = themeSlice.actions;
export { toggleTheme };

export default themeSlice;
