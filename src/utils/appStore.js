import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "./userSlice";
import { movieSlice } from "./movieSlice";
const appStore = configureStore({
    reducer:{
        user: userSlice.reducer,
        movie: movieSlice.reducer
    }
}) 

export default appStore;