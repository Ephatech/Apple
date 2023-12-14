import React, {useState, useEffect} from 'react';

const Youtube = () => {
//     const apiKey = "AIzaSyBSirzitNJa4GZuKHWJyuDEALW5ULJPBFY";

//     const chanIdReq = "https://youtube.googleapis.com/youtube/v3/channels?part=id&forUsername=apple&key=AIzaSyBSirzitNJa4GZuKHWJyuDEALW5ULJPBFY";

//     const appleChanId = "UCE_M8A5yxnLfW0KghEeajjw";

//       const data  ="https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=12&order=rating&key=AIzaSyBSirzitNJa4GZuKHWJyuDEALW5ULJPBFY"

const [videos, setVideos] = useState([]);

useEffect(() => { 
    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=12&order=rating&key=AIzaSyBSirzitNJa4GZuKHWJyuDEALW5ULJPBFY")
    .then((response)=>response.json())
    .then((data)=>{
        setVideos(data.items);
    });
}, [] );

console.log(videos);

    return (
        <div className='container'>
            <div className='row justify-content-center text-center'>
                <div className='col-12 my-3'>
                    <div className='title-wrapper'>
                        <p>Latest Youtube Videos</p></div>
                </div>      
            {
                videos?.map((singleVideo, i) => {
                    let vidId = singleVideo.id.videoId;
                    let vidLink = 'https://www.youtube.com/watch?v=${vidId}';
                    let vidImg=singleVideo.snippet.thumbnails.high.url;
                    let vidDesc=singleVideo.snippet.description;
                    let videoWrapper = (
                        <div className='col-sm-12 col-md-6 col-lg-3'>
                            <div className='single-video'>
                            <div className='text-center'>
                                <a href={vidLink}
                                target='_blank' rel="noreferrer">
                                    <img src={vidImg} alt='Thumbnails'></img>
                                </a>
                            </div>
                            <div className='text-center'>
                                <p>{vidDesc}</p>
                            </div>
                            </div>
                        </div>
                    );
                    return videoWrapper;
                })
            }
            </div>
        </div>
    );
}

export default Youtube;
