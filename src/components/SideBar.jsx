import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { FaHistory } from "react-icons/fa";
import { GrChannel } from "react-icons/gr";
import { BiSolidVideos, BiLike  } from "react-icons/bi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { RiShoppingBag2Line } from "react-icons/ri";
import { LuMusic2 } from "react-icons/lu";
import { RiMovie2Line } from "react-icons/ri";
import { CgMediaLive } from "react-icons/cg";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { MdOutlinePodcasts } from "react-icons/md";
import { MdOutlineGolfCourse } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";

const SideBar = () => {

 

  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen) 

  // Early return

  if(!isMenuOpen) return null;

  return (
    <div className='p-5 lg:block sticky top-16 hidden min-w-56 h-screen'>
      <ul className='pt-5'>
        <li className='bg-gray-200 pl-3 pr-18 py-2 rounded-lg'>
          <div className='flex gap-2'>
            <IoMdHome className='text-2xl' />
            <Link to="/"> Home</Link>
          </div>
        </li>
        
      </ul>
      <hr className='my-3' />
      <h1 className='font-bold pb-5 text-lg pt-5'>You </h1>
      <ul>
        <li className='pl-3 pr-12 py-2 rounded-lg hover:bg-gray-200'>
          <div  className='flex gap-5 items-center'>
            <SiYoutubeshorts  className='text-lg' />
            <Link>Shorts</Link>
          </div>
        </li>
        <li className='pl-3 pr-12 py-2 rounded-lg  hover:bg-gray-200'>
          <div  className='flex gap-5 items-center'>
            <FaHistory  className='text-lg' />
            <Link>History</Link>
          </div>
        </li>
        <li className='pl-3 pr-12 py-2 rounded-lg  hover:bg-gray-200'>
          <div  className='flex gap-5 items-center'>
            <GrChannel  className='text-lg' />
            <Link>Watched</Link>
          </div>
        </li>
        <li className='pl-3 pr-12 py-2 rounded-lg  hover:bg-gray-200'>
          <div  className='flex gap-5 items-center'>
            <BiSolidVideos  className='text-lg' />
            <Link>Your Videos</Link>
          </div>
        </li>
        <li className='pl-3 pr-12 py-2 rounded-lg  hover:bg-gray-200'>
          <div  className='flex gap-5 items-center'>
            <BiLike  className='text-lg' />
            <Link>Liked</Link>
          </div>
        </li>
      </ul>
      <hr className='my-3' />
      <h1 className='font-bold pb-5 text-lg pt-5'>Explore</h1>
      <ul>
        <li className='pl-3 pr-12 py-2 rounded-lg  hover:bg-gray-200'>
          <div  className='flex gap-5 items-center'>
            <FaArrowTrendUp  className='text-lg' />
            <Link>Trending</Link>
          </div>
        </li>
        <li className='pl-3 pr-12 py-2 rounded-lg  hover:bg-gray-200'>
          <div  className='flex gap-5 items-center'>
            <RiShoppingBag2Line  className='text-lg' />
            <Link>Shopping</Link>
          </div>
        </li>
        <li className='pl-3 pr-12 py-2 rounded-lg  hover:bg-gray-200'>
          <div  className='flex gap-5 items-center'>
            <LuMusic2  className='text-lg' />
            <Link>Music</Link>
          </div>
        </li>
        <li className='pl-3 pr-12 py-2 rounded-lg  hover:bg-gray-200'>
          <div  className='flex gap-5 items-center'>
            <RiMovie2Line  className='text-lg' />
            <Link>Movies</Link>
          </div>
        </li>
        <li className='pl-3 pr-12 py-2 rounded-lg  hover:bg-gray-200'>
          <div  className='flex gap-5 items-center'>
            <CgMediaLive  className='text-lg' />
            <Link>Live</Link>
          </div>
        </li>
        <li className='pl-3 pr-12 py-2 rounded-lg  hover:bg-gray-200'>
          <div  className='flex gap-5 items-center'>
            <IoNewspaperOutline  className='text-lg' />
            <Link>News</Link>
          </div>
        </li>
        <li className='pl-3 pr-12 py-2 rounded-lg  hover:bg-gray-200'>
          <div  className='flex gap-5 items-center'>
            <MdOutlineSportsBaseball  className='text-lg' />
            <Link>Sports</Link>
          </div>
        </li>
        <li className='pl-3 pr-12 py-2 rounded-lg  hover:bg-gray-200'>
          <div  className='flex gap-5 items-center'>
            <MdOutlinePodcasts  className='text-lg' />
            <Link>Podcast</Link>
          </div>
        </li>
        <li className='pl-3 pr-12 py-2 rounded-lg  hover:bg-gray-200'>
          <div  className='flex gap-5 items-center'>
            <MdOutlineGolfCourse  className='text-lg' />
            <Link>Course</Link>
          </div>
        </li>
        <li className='pl-3 pr-12 py-2 rounded-lg  hover:bg-gray-200'>
          <div  className='flex gap-5 items-center'>
            <SiYoutubegaming  className='text-lg' />
            <Link>Gaming</Link>
          </div>
        </li>
        
      </ul>
    </div>
  )
}

export default SideBar