import React from 'react'
import LaunchCard from './LaunchCard';
import { useFetchUpcoming, useFetchPast } from '../utils/fetchApi';

const Home = () => {
    
    const upLaunch = useFetchUpcoming()
    const pastLaunch = useFetchPast()    

    
    return (
        <div className='w-10/12 p-6 text-white overflow-y-scroll mx-auto'>      
            
            <div className='flex flex-wrap'>
                {
                upLaunch?.map((data)=>(
                    <LaunchCard key={data.launch_date_unix} data={data}/>
                ))
        
                } 
            </div>
            <div className='flex flex-wrap'>
            {
            pastLaunch?.map((data)=>(
                <LaunchCard key={data.launch_date_unix} data={data}/>
            ))
    
            } 
            </div>
            
                
            
        </div>
        )

  
}

export default Home