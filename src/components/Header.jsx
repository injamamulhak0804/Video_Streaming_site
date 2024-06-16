import { useDispatch, useSelector } from "react-redux"
import { HAMBURGER, USERICON, YOUTUBE, YOUTUBESEARCH } from "../utils/constants"
import { toogleMenu } from "../utils/Redux/appSlice"
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { cacheResults } from "../utils/Redux/searchSlice";
import { RxHamburgerMenu } from "react-icons/rx";
import { addItems } from "../utils/Redux/svideoSlice";
import { useNavigate, Link } from "react-router-dom";


const Header = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const navigate = useNavigate()
  
  const dispatch = useDispatch();
  const searchCache = useSelector((store)=> store.search)

  const toggleMenuHandler = () =>{
    dispatch(toogleMenu())
  }

  useEffect(()=>{
    //API call
    // Make an api every key press
    // but if the difference between two api call less than 200ms 
    // decline the api call

    const timer = setTimeout(()=> {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
      }else{  
        getSearchSuggestion()
      }
    }, 200);
    
    return () =>{
      clearTimeout(timer);
    }

  },[searchQuery])

  const getSearchSuggestion = async () =>{
    const data = await fetch(YOUTUBESEARCH + searchQuery);
    const json = await data.json();
    setSuggestions(json[1])
    dispatch(cacheResults({
      [searchQuery] : json[1]
    })) 
  }



  // function to suggestion to search bar

  const handleClick = (value) =>{
    setSearchQuery(value)
    setShowSuggestion(false)
    search()
  }

  const search = async () =>{
    if(!searchQuery) return navigate("/") ;
    else{
      const data = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=" + searchQuery + "&type=video&key=AIzaSyDtJKMUVsEwQMing1NZc5TRKG9057zQxUw");
    const json = await data.json();
    dispatch(addItems(json?.items));
     navigate("/search")
    }
  }

  return (
    <div className="grid bg-white grid-flow-col p-5 sticky top-0 shadow-md items-center">

        <div className="flex items-center col-span-1">
          <RxHamburgerMenu onClick={()=> toggleMenuHandler()} className="text-2xl font-thin h-8 cursor-pointer  mx-5" />
          <img className="h-12 cursor-pointer hidden md:block" src={YOUTUBE} alt="" />
        </div>

        <div className="col-span-10 mx-auto min-w-[90%]">
          <div className="flex">
            <input
            onChange={(e)=>setSearchQuery(e.target.value)}
            onFocus={()=> setShowSuggestion(true)}
            value={searchQuery} 
            type="text" 
            className="w-1/2 p-2 rounded-l-full border ps-5" placeholder="Search" />
          <button onClick={search} className="border boder-gray-400 rounded-r-full cursor-pointer bg-gray-200"><IoIosSearch className="w-16 h-5" /></button>
          </div>
          {
            showSuggestion && (
              <div className="fixed bg-white  w-[37rem] rounded-lg shadow-lg border border-gray-100">
                <ul>
                  {
                    suggestions?.map((s)=> <li onClick={() => handleClick(s)} key={s} className="hover:bg-gray-200 py-2 px-3 cursor-pointer w-full"><span ><IoIosSearch className="inline w-5 h-5"/> </span>{s}</li>)
                  }
                </ul>
              </div>)
          }
        </div>

        <Link to = "/user">
          <div >
          <img className="w-12 cursor-pointer" src={USERICON} alt="" />
        </div>
        </Link>
    </div>
  )
}

export default Header