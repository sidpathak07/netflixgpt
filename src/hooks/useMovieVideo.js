import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import {useSelector, useDispatch} from "react-redux";
import {setMainMovieTrailer} from "../utils/movieSlice";
const useMovieVideo = (movieId)=>{
    const dispatch = useDispatch();
    const fetchMovieVideo = async()=>{
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,API_OPTIONS)
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            let trailer = data.results.filter(d=>d.type==="Trailer");
            dispatch(setMainMovieTrailer(trailer));
        })
        .catch(error=>console.log(error));
    }
    useEffect(()=>{
        fetchMovieVideo();
    },[])
}
export default useMovieVideo;