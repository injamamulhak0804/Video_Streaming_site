import React from 'react'
import { useSelector } from 'react-redux'
import { SearchVideo } from './SearchVideo';
import { Link } from 'react-router-dom';

const SearchPage = () => {
  const data = useSelector((store)=> store?.sVid?.data)
  return (
    <div className='md:p-8'>
      <div>
      {
        data.map((items, index)=> <Link key={items.id.videoId} to={"/watch?v="+items.id.videoId} ><SearchVideo info = {items} /> </Link>)
      }
      </div>
    </div>
  )
}

export default SearchPage