import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () =>{
    const movies = useSelector(state => state.movie?.recommendedMovies ?? []);
    return(
        <div className="relative px-4 md:px-8 overflow-y-hidden bg-black">
            <MovieList className="absolute left-0 right-0 top-[80vh]" title="Recommended Movies" movies={movies} />
        </div>
    )
}
export default SecondaryContainer;