import Header from "./Header";
import useRecommendedMovie from "../hooks/useRecommendedMovie";
import MainContainer from "./MainContainer";

const Browse = () =>{
    useRecommendedMovie();
    return(
        <div>
            <Header />
            <MainContainer />
        </div>
    );
}
export default Browse;