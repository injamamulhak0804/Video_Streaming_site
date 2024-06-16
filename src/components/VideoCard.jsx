const VideoCard = ({info}) => {
  
  const {snippet, statistics} = info
  const {channelTitle, title, thumbnails} = snippet

  return (
    <div className='flex  flex-col overflow-hidden p-2 m-2 w-96 cursor-pointer '>
      <img src={thumbnails.medium.url} className='transition-all duration-300 rounded-2xl hover:rounded-none' alt="" />
      <ul className='px-1 flex gap-3 justify-between'>
        <div className="">
          <li className='font-bold mt-2'>{title}</li>
          <li className='mt-1'>{channelTitle}</li>
          <li className='mt-1'>{statistics.viewCount.length > 3 && statistics.viewCount.length <= 6 ? statistics.viewCount.slice(0,3) + "k " : statistics.viewCount.slice(0,2) + "M "} views</li>
        </div>
      </ul>
    </div>
  )
}

export default VideoCard