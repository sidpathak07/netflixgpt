import { TMDB_BASE_IMG_URL } from "../utils/constants";
import { FaCirclePlay  } from "react-icons/fa6";

const MovieCard = ({movie}) =>{
    console.log(movie);
    return(
        <div className="w-40 h-60 mx-2 relative flex-none hover:scale-110 transition-transform duration-300 group">
            <h1 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2 truncate">{movie.title}</h1>
            <img className="w-full h-full object-cover block" src={TMDB_BASE_IMG_URL + movie.poster_path} alt={movie.title} />
            <FaCirclePlay className="absolute bottom-1/4 left-2 text-red-700 text-4xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
        </div>
    )
}

export default MovieCard;