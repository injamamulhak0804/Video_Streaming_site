import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from "../utils/Redux/appSlice"
import { useParams, useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import { useLocation } from 'react-router-dom';

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams1] = useSearchParams();
  const location = useLocation();
  const [suggestion, setSuggestion] = useState([])


  const searchParams = new URLSearchParams(location.search);
  const cIdParam = searchParams.get('cId');
  let cId;
  if (!cIdParam) {
    const pathnameParts = location.search.split('/'); // Splitting pathname by '/'
    const cIdIndex = pathnameParts.findIndex(part => part.startsWith('cId=')); // Find index of the part containing 'cId='
    if (cIdIndex !== -1) {
      cId = pathnameParts[cIdIndex].substring('cId='.length); // Extract cId value
    }
  } else {
    // If cId is found in query params, use it
    cId = cIdParam;
  }

  useEffect(()=>{
    // getSuggestionMovies();
  }, [])

  const getSuggestionMovies =  async () =>{
    const data = await fetch("https://www.googleapis.com/youtube/v3/activitiespart=snippet%2CcontentDetails&channelId="+ cId +"&maxResults=25&regionCode=tw&key=AIzaSyDtJKMUVsEwQMing1NZc5TRKG9057zQxUw")
    const json = await data.json()
    console.log(json);
  }



    
  useEffect(()=>{
    dispatch(closeMenu())
  },[])

  return (
    <div className='flex flex-col overflow-hidden w-full'>
      <div className='flex px-5 w-full'>
        <div>
          <iframe width="1200" height="600" 
          src={"https://www.youtube.com/embed/" + searchParams1.get("v") +"?&autoplay=2&mute=2"} 
          title="YouTube video player" 
          frameBorder="0" 
          className='m-5 p-5 rounded'
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen>
        </iframe>
        </div>
        <div className='w-full'>
          <LiveChat />
        </div>
      </div>
      {/* <CommentsContainer /> */}
      <div>
        <h1>Right</h1>
      </div>
    </div>
  )
}

export default WatchPage