import React from 'react'
import { OrbitProgress } from 'react-loading-indicators'

const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[30vh]'>
        <OrbitProgress variant="split-disc" color="#32cd32" size="medium" text="" textColor="" />
        <h1 className='text-2xl font-bold'>Sending Mails...</h1>
    </div>
  )
}

export default Loading