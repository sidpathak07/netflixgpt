import {useSelector} from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
const MainContainer = () =>{
    const movies = useSelector(state => state.movie?.recommendedMovies ?? []);
    console.log(movies);
    return(
        <div className="relative w-full h-screen text-white">
            {
                movies.length>0 && (
                    <>
                        <VideoBackground movieId={movies[0]?.id} />
                        <div className="absolute inset-0 flex items-center justify-start px-10">
                            <VideoTitle title={movies[0]?.original_title} overview={movies[0]?.overview}/>
                        </div>
                    </>
                )
            } 
        </div>
    )
}
export default MainContainer;