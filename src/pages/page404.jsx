import React from 'react'

export default function Error404Page () {
  return (
    <div className="flex w-full h-screen bg-white text-gray-400 justify-center items-center">
        <div className="flex flex-col mr-2 justify-center items-center mt-2">
            <p className="text-2xl font-bold">404</p>
            <p className="text-md">error</p>
        </div>
        <div className="text-5xl font-bold">{":("}</div>
    </div>
  )
}
