import MovieCard from "./MovieCard";

const MovieList=({title,movies})=>{
    console.log(movies);
    return(
        <div>
            <h1 className="text-xl font-bold p-4 text-white">{title}</h1>
            <div className="flex overflow-x-scroll overflow-y-hidden movie-list-scroll">
                {
                    movies?.map(movie=><MovieCard key={movie.id} movie={movie}/>)
                }
            </div>
        </div>
    )
}

export default MovieList;