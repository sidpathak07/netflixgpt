import { createSlice } from "@reduxjs/toolkit";
export const movieSlice = createSlice({
    name:"movie",
    initialState:{
        recommendedMovies:[],
        setMainMovieTrailer:null
    },
    reducers:{
        addRecommendedMovie:(state,action)=>{
            state.recommendedMovies =  action.payload
        },
        setMainMovieTrailer:(state,action)=>{
            state.setMainMovieTrailer = action.payload
        }
    }
})

export const {addRecommendedMovie, setMainMovieTrailer} = movieSlice.actions;
export default movieSlice.reducer;