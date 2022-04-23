import { createSlice } from "@reduxjs/toolkit"

// membuat slice
const carCartSlice = createSlice({
    // slice ini terdiri dari name, initialState dan reducernya
    name: "carCart",
    initialState: {
        carCart: [],
    },
reducers: {
    addCarToCart: (state, action) => {
        // ngepush payload dengan id
        state.carCart.push(action.payload.id);
    },
},
});

export default carCartSlice