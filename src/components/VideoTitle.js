import { FaInfo,FaPlay } from "react-icons/fa6";

const VideoTitle = ({title, overview})=>{
    return(
        <div className="flex flex-col justify-center h-full px-10">
            <div className="w-3/6">
                <h1 className="text-3xl font-bold">{title}</h1>
                <p className="text-lg mt-2">{overview}</p>
                <div className="mt-4 flex">
                    <button className="bg-red-600 transform  hover:w-40 text-center text-white px-4 py-2 rounded mr-4 flex items-center justify-center"><FaPlay className="mr-2" />Play</button>
                    <button className="bg-gray-700 text-white px-4 py-2 rounded flex items-center justify-center"><FaInfo className="mr-2" />More Info</button>
                </div>
            </div>
        </div>
    )
}

export default VideoTitle;