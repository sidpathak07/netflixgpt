import Header from "./Header";
import useRecommendedMovie from "../hooks/useRecommendedMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () =>{
    useRecommendedMovie();
    return(
        <div className="relative">
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    );
}
export default Browse;