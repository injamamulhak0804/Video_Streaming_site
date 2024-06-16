import React from 'react'
import { USERICON } from '../utils/constants'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center w-full shadow p-2'>
            <img className="w-12" src={USERICON} alt="" />
            <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage