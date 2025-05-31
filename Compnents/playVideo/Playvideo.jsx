
import './PlayVideo.css'

import rizz from '../../Assets/rizz.mp4.mp4'
import stark1 from '../../Assets/stark1.jpeg'
import stark2 from '../../Assets/stark2.jpeg'
import { useEffect, useState } from 'react'
import ApiKey, { valueConverter } from '../../apiAnddat/ApiKey'
import moment from 'moment';
import axios from 'axios'
import {  useParams } from 'react-router-dom'


const PlayVideo = () =>{

    const {videoId} = useParams()

    const [apiData, setapiData] = useState(null) ;
    const [channeldata, setcahnnelData] = useState(null) ;
    const [commentData, setcommentData] = useState([]) ;


    const fetchvideoData = async () => {
    try {
            const VideoDetails = await axios.get(   `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${ApiKey}`) ;
            setapiData(VideoDetails.data.items[0])
    } catch (error) {
        console.log('fetch error', error.VideoDetails.data || error.message)
        
    }
    }

    const fetchChannelData = async () =>{
        try {

            const channelResponse =  await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,contentDetails&id=${apiData?.snippet.channelId}&key=${ApiKey}`)
            // console.log(channelResponse.data.items[0]) ;
            setcahnnelData(channelResponse.data.items[0]) ;
        } catch (error) {console.log('my',error) }
          
            try {
                  const commentResponse = await axios.get(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=50&videoId=${videoId}&key=${ApiKey}`) ;
                //   console.log(commentResponse.data.items)
                  setcommentData(commentResponse.data.items)
                
            } catch (error) {
                console.log('my',error)
            }
    }



    useEffect(()=>{
        fetchvideoData() ;
    },[videoId])

    useEffect(() =>{

        fetchChannelData() ;

    },[apiData])


    return(
        <div className='play-video'>
            {/* <video src= {rizz} controls autoPlay muted></video> */}

            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h3>{apiData?apiData.snippet.title:'Title Here'}</h3>
            <div className="play-video-info">
                <p>{apiData?valueConverter(apiData.statistics.viewCount):"Loading"} views  &bull; {apiData?moment(apiData?.snippet.publishedAt).fromNow():'loading'}  </p>

                <div>
                    <div className='span-icon'><span class="material-symbols-outlined">thumb_up</span> {apiData?valueConverter(apiData.statistics.likeCount):"loading"} </div>

                      <div className='span-icon'><span class="material-symbols-outlined">thumb_down</span> </div>

                        <div className='span-icon'><span class="material-symbols-outlined">send</span> Shared</div>

                          <div className='span-icon'><span class="material-symbols-outlined">download</span> download</div>
                </div>

            </div>

            <hr />

            <div className="publisher">
                <img src={channeldata?channeldata.snippet.thumbnails.default.url:"loading image"} alt="" />

                <div>
                    <p>{apiData?apiData.snippet.channelTitle:"Loading channelTitle"}</p>
                    <span>{channeldata?valueConverter(channeldata.statistics.subscriberCount):"loding subcribers"}</span>
                </div>

                <button>Subscribe</button>
            </div>

            <div className="vid-description">
                <p>{apiData?apiData.snippet.description.slice(0,250):"description loading"}</p>
                <p>In this tutorial we will make a YouTube clone </p>
                <hr />

                <h4>{apiData?valueConverter(apiData.statistics.commentCount):'loading comment Count'} Comments</h4>

                {commentData.map((items, ind) =>{

                    return(

                         <div key = {ind} className="comments">
                    <img src={items.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="image" />
                    <div>
                        <h3>{items.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                        <p>{items.snippet.topLevelComment.snippet.textDisplay}</p>

                        <div className="comment-action">
                           <div className="like"> <span class="material-symbols-outlined">thumb_up</span></div>
                           <span>{valueConverter(items.snippet.topLevelComment.snippet.likeCount)}</span>
                           <div className="dislike"><span class="material-symbols-outlined">thumb_down</span></div>
                        </div>
                    </div>
                </div>

                    )

                })}

               

             

            </div>

        </div>
    )
}

export default PlayVideo ;