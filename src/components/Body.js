import React from "react";
import "../App.css";
import {SiYoutube} from 'react-icons/si';

// const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
// // Fetch video details 
// const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=VIDEO_ID&key=${YOUTUBE_API_KEY}`);

// // Extract JSON data 
// const data = await response.json();

// // Get title, description, thumbnail etc
// const title = data.items[0].snippet.title;
// const desc = data.items[0].snippet.description; 
// const thumbnail = data.items[0].snippet.thumbnails.high.url;

export default function body(){
    return (
        <div className="card w-9/12 bg-slate-100 shadow-xl m-auto">
            <h2 className="card-title text-center m-auto mt-5 text-5xl">
                <SiYoutube className='text-red-500 text-7xl'/>
                Youtube Downloader
            </h2>
            <figure id="picture" className="px-10 pt-10"></figure>

            <div className="card-body items-center text-center">
                <p className="text-xl">Download Videos or an entire playlist from Youtube</p>
                <div className="flex w-full m-auto mt-5 Ymb-24">
                    <input 
                        type="text" 
                        placeholder="Enter url here | https://www.youtube.com/watch?v=mH5fXUZyfpE" 
                        className="input input-bordered input-primary w-3/4 m-auto" 
                    />
                    <button className="btn btn-primary m-auto w-1/4 ml-2 text-xl">Convert</button>
                </div>
            </div>
        </div>
    )
}
