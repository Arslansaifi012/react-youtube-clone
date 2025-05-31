
import './Recommended.css'

import { useEffect, useState } from 'react'
import axios from 'axios';
import ApiKey from '../../apiAnddat/ApiKey';
import { valueConverter } from '../../apiAnddat/ApiKey';
import { Link } from 'react-router-dom';


const Recommended = ({categoryId}) =>{

    const [apiData, setapiData] = useState([]);

    const fetchdataRecommended = async () =>{

          try {

          const response = await axios.get(  `https://www.googleapis.com/youtube/v3/videos`, {
         params: {
      part: 'snippet,contentDetails,statistics',
      chart: 'mostPopular',
      maxResults: 50,
      regionCode: 'IN',      
      videoCategoryId: categoryId, 
      key: ApiKey
    }  } );


    // console.log(response.data.items) ;
    setapiData(response.data.items) ;
        
      } catch (error) {
        console.log('Fetch error:', error.response?.data || error.message);
      }

    }


    useEffect(() =>{
        fetchdataRecommended() ;
    },[])

    return ( 
        <div className='recommended'>

            {apiData.map((items, ind) =>{

                return(
                      <Link to={`/video/${items.snippet.categoryId}/${items.id}`} className="side-video-list">
                <img src={items.snippet.thumbnails.medium.url} alt="" />

                <div className="vid-info">
                    <h4>{items.snippet.title}</h4>
                    <p>{items.snippet.channelTitle}</p> 
                    <p>{valueConverter(items.statistics.viewCount)} Views</p>
                </div>
            </Link>

                )
            })}
          
        </div>
    )
}

export default Recommended ;