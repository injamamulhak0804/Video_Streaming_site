import React from 'react'
import { USERICON } from '../utils/constants';

const Comment = ({data}) => {
    const {name, replies, text} = data;
  return (
    <div className='flex shadow-md p-2 bg-gray-100 rounded'>
        <img className='w-8 h-8 object-cover' src={USERICON} alt="" />
        <div className='px-3'>
            <p >{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Comment