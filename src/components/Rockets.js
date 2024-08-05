import React, {useState} from 'react'
import '../App.css'
import RocketCard from './RocketCard'
import { useFetchRocket } from '../utils/fetchApi'

const Rockets = () => {
    const rockets = useFetchRocket()   
    
    
  return (
    
    <div className='w-10/12 p-6 m-5 text-white mx-auto overflow-y-scroll'>
        <div className='flex flex-wrap bg-black bg-opacity-50 rounded-lg'>
        {rockets?.map((data, index)=>(
            <RocketCard key={data.id} data={data}/>
        ))}
       </div>
    </div>
    
  )
}

export default Rockets