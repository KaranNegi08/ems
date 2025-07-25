import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full p-5 w-[300px] bg-blue-400 rounded-xl'>
    <div className='flex justify-between'>
        <h3 className=' bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.date}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold underline decoration-gray-200'>{data.title}</h2>
    <p className='text-sm mt-2'>{data.description}</p>

    <div className='mt-4'>
        <button className='bg-blue-500 py-1 px-2 text-sm'>Accepted Task</button>
    </div>
  </div>
  )
}

export default NewTask
