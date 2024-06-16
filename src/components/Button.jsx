import React from 'react'

function Button({name}) {
  return (
    <div>
        <button className='px-8 font-semibold py-1 text-sm m-2 rounded-lg bg-gray-200'>{name}</button>
    </div>
  )
}

export default Button