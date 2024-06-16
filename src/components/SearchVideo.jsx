import React from 'react'

export const SearchVideo = ({info}) => {
    
    const {thumbnails, description, title, channelTitle} = info?.snippet 

    return (
    <div className='flex w-screen mx-5 gap-5 cursor-pointer mb-5'>
        <img src={thumbnails.medium.url} height={360} width={480} className='transition-all object-fill duration-300 rounded-2xl hover:rounded-none' alt="" />
        <div className='flex flex-col gap-y-4'>
            <h1 className='text-lg font-bold'>{title}</h1>
            <p>{channelTitle}</p>
            <p className='text-xs'>{description}</p>
        </div>
    </div>
  )
}
