import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import useMainContainerVideos from '../utils/Hooks/useMainContainerVideos';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';
import { YOUTUBE_API, YOUTUBE_API_MORE } from '../utils/constants';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        getVideos();
    }, [])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_API);
        const json = await data.json();
        setVideos(json?.items);
    }

  const fetchData = async () =>{
    const data = await fetch(YOUTUBE_API_MORE);
        const json = await data.json();
        const newVideo = json?.items
    setTimeout(()=>{
      setVideos(videos.concat(newVideo))  
    }, 1000)
  }


  console.log(videos);

  return (
    <>
      <InfiniteScroll dataLength={videos.length} loader={<p>LOADING....</p>} hasMore={hasMore} next={fetchData}  >
        <div className='flex lg:ps-10 flex-wrap justify-center md:justify-start'>
          {            videos.map((video, indx)=>  // The Index as a Key is not a recommended way for the sake of inifite scroll the id are same so i use it!!.
            <Link key={indx} to={"/watch?v="+video.id + "/cId=" + video?.snippet?.channelId}>
              <VideoCard  info = {video}/>
            </Link>)
          }
        </div>
      </InfiniteScroll>
    </>
  )
}

export default VideoContainer