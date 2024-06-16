import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/Redux/chatSlice'
import {generateRandomName} from '../utils/helper'
import {generateRandomText} from '../utils/helper'

const LiveChat = () => {
    
    const [liveMessage, setLiveMessage] = useState("")
    const dispatch = useDispatch()
    const chatMessage = useSelector((store)=> store.chat.message)

    useEffect(()=>{
        //API polling

        const i = setInterval(()=>{
            dispatch(addMessage({
                name: generateRandomName(), 
                message: generateRandomText(20)
            }));
        }, 2000)

        return () => {clearInterval(i)}
    },[])

  return (
    <>
    <div className='mt-8 flex flex-col-reverse w-full overflow-y-scroll border border-black bg-slate-100 rounded-lg h-[500px]'>
        <div>
        {
            chatMessage.map((c, i) => <ChatMessage key={i} name = {c.name} message = {c.message}   /> )
        }
        </div>
    </div>
        <form onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addMessage({
                name: "zamam",
                message: liveMessage
            }))
        } } 
        className='w-full p-2 mt-2 border border-black'>
            <input type="text" value={liveMessage} onChange={(e)=> setLiveMessage(e.target.value)}  className=' w-96 p-2 border border-black rounded-lg' placeholder='Enter a message'/>
            <button className='mx-2 px-4 py-2 bg-blue-500 text-white rounded'>Submit</button>
        </form>
    </>
  )
}

export default LiveChat