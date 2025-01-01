import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello, <br /><span className='text-3xl font-semibold'>Karan 👋</span> </h1>
      <button className=' text-lg font-medium bg-red-600 text-white px-5 py-2 rounded-small' >Log out</button>
    </div>
  )
}

export default Header
