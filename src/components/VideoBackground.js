import useMovieVideo from "../hooks/useMovieVideo";
import { useSelector } from "react-redux";
const VideoBackground = ({movieId}) =>{
    const trailer = useSelector(state => state.movie?.setMainMovieTrailer)
    useMovieVideo(movieId);
    console.log(trailer);
    return(
        <div className="absolute inset-0 w-full h-full">
            {
                trailer && trailer.length > 0 ? (
                    <iframe
                        className="w-full h-full aspect-video pointer-events-none"
                        src={`https://www.youtube.com/embed/${trailer[0]?.key}?autoplay=1&mute=1&loop=1&controls=0&rel=0&playlist=${trailer[0]?.key}`}
                        title="Movie Trailer"
                        allow="autoplay; muted"
                        frameBorder="0"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                        <p className="text-white">Loading video...</p>
                    </div>
                )
            }
        </div>
    )
}
export default VideoBackground;