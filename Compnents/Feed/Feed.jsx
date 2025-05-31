import './Feed.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
import ApiKey, { valueConverter } from '../../apiAnddat/ApiKey';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Feed = ({ category, inputValue }) => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  // Fetch category-based data
  const fetchCategoryData = async () => {
    try {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
        params: {
          part: 'snippet,contentDetails,statistics',
          chart: 'mostPopular',
          maxResults: 15,
          regionCode: 'IN',
          videoCategoryId: category,
          key: ApiKey
        }
      });
      setData(response.data.items);
    } catch (error) {
      console.log('Fetch error:', error.response?.data || error.message);
    }
  };



  // Fetch search-based data
  const fetchSearchData = async () => {
    if (!inputValue) {
      setSearchData([]); 
      return;
    }

    try {
      const searchRes = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          part: 'snippet',
          maxResults: 15,
          q: inputValue,
          type: 'video',
          regionCode: 'IN',
          key: ApiKey
        }
      });

    const videoIds = searchRes.data.items
  .map(item => item.id?.videoId)
  .filter(id => id)  
  .join(',');

      // Now get full details (like statistics and categoryId) of these videoIds
      const detailRes = await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
        params: {
          part: 'snippet,contentDetails,statistics',
          id: videoIds,
          key: ApiKey
        }
      });

      console.log(detailRes) 

      setSearchData(detailRes.data.items);
    } catch (error) {
      console.log('Search error:', error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, [category]);

  useEffect(() => {
    fetchSearchData();
  }, [inputValue]);

  // Decide which data to show: search or category
  const finalData = inputValue ? searchData : data;

  return (
    <div className="feed">
      {finalData.map((items, ind) => (
        <Link
          to={`video/${items.snippet.categoryId}/${items.id}`}
          className="Card"
          key={ind}
        >
          <img src={items.snippet.thumbnails.medium.url} alt="" />
          <h2>{items.snippet.title}</h2>
          <h3>{items.snippet.channelTitle}</h3>
          <p>
            {valueConverter(items.statistics.viewCount)} Views •{' '}
            {moment(items.snippet.publishedAt).fromNow()}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;