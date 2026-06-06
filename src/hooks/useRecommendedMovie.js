import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import {useSelector, useDispatch} from "react-redux";
import { addRecommendedMovie } from "../utils/movieSlice";
const useRecommendedMovie = () => {
    const dispatch = useDispatch();
    const fetchRecommendedMovies = async()=>{
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTIONS)
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            dispatch(addRecommendedMovie(data.results));
        })
        .catch(error=>console.log(error));
    }
    useEffect(()=>{
        fetchRecommendedMovies();
    },[]);
}

export default useRecommendedMovie;