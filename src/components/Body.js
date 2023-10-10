import React, {useState} from "react";
import "../App.css";
import {SiYoutube} from 'react-icons/si';

const {REACT_APP_YOUTUBE_API_KEY} = process.env

export default function Body(){
    const [url, setUrl] = useState('');
    const [videoData, setVideoData] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Util function to extract video ID from YouTube URL
    const extractVideoIdFromUrl = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
  
    return (match && match[2].length === 11)
      ? match[2]
      : null;
    }
  

    const fetchVideoData = async () => {
        setIsLoading(true);
        try {
          const videoId = extractVideoIdFromUrl(url);  
          const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${REACT_APP_YOUTUBE_API_KEY}`);
          const data = await response.json();
          setVideoData(data.items[0].snippet);
        } catch (err) {
          setError(err.message);
        }
        setIsLoading(false);
      }

    return (
        <div className="card w-9/12 bg-slate-100 shadow-xl m-auto">
            <h2 className="card-title text-center m-auto mt-5 text-5xl">
                <SiYoutube className='text-red-500 text-7xl'/>
                Youtube Downloader
            </h2>
            <figure id="picture" className="px-10 pt-10"></figure>

            <div className="card-body items-center text-center">
                <p className="text-xl">Download Videos or an entire playlist from Youtube</p>
                <div className="flex w-full m-auto mt-5">
                    <input 
                        type="text" 
                        value={url} 
                        placeholder="Enter url here | https://www.youtube.com/watch?v=mH5fXUZyfpE" 
                        onChange={(e) => setUrl(e.target.value)} 
                        className="input input-bordered input-primary w-3/4 m-auto" 
                    />
                    <button className="btn btn-primary m-auto w-1/4 ml-2 text-xl" onClick={fetchVideoData}>Convert</button>
                </div>
                <div className="card-body items-center text-center">
                    {isLoading && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}

                    {videoData.title && <h1 className="text-xl font-bold">{videoData.title}</h1>}

                    {videoData.thumbnails && (
                    <img 
                        src={videoData.thumbnails.high.url} 
                        alt="video thumbnail" 
                    />
                    )}

                    {videoData.description && 
                    <p>
                        {videoData.description.split('\n').map(line => {
                        return line + <br />
                        })}
                    </p>
                    }

                </div>
            </div>
        </div>
    )
}
