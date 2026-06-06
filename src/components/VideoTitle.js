const VideoTitle = ({title, overview})=>{
    return(
        <div className="flex flex-col  justify-center h-full px-10">
            <div className="w-3/6">
                <h1 className="text-3xl font-bold">{title}</h1>
                <p className="text-lg mt-2">{overview}</p>
                <div className="mt-4">
                    <button className="bg-red-600 text-white px-4 py-2 rounded mr-4">Play</button>
                    <button className="bg-gray-700 text-white px-4 py-2 rounded">More Info</button>
                </div>
            </div>
        </div>
    )
}

export default VideoTitle;