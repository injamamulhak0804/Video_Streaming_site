import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const List = [ "Score", "Live", "Nasheed", "Cooking", "Quran", "Lofi", "Thajuud", "motivation", "Tamil cinema", "Kids", "Body building"] 

  return (
    <div className='mt-5 md:pl-36 hidden lg:flex'>
      <div>
        <button className='px-8 font-semibold py-1 text-white text-sm m-2 rounded-lg bg-black'>All</button>
    </div>
      {
        List.map((btn)=> <Button key={btn} name = {btn} />)
      }
    </div>
  )
}

export default ButtonList