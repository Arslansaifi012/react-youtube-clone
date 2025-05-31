
import axios from 'axios' 



export default axios.create({
    baseURL:'GET https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=VIDEO_ID &key=YOUR_API_KEY'
})