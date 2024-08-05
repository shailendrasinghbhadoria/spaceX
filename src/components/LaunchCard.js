import React from 'react'
import {upcomingLaunch, previouseLaunch} from '../utils/contant'

const LaunchCard = ({data}) => {

    const {mission_name, flight_number, launch_date_utc, upcoming} = data
    const {mission_patch_small} = data.links

    const date = new Date(launch_date_utc)
    const newDate = date.toDateString().split(' ').slice(1, 3).join(" ")
    const newTime = date.toLocaleString().split(' ').slice(1, 3).join(" ");
   

  return (
    <div className='w-5/12 flex p-8 m-4 bg-black text-white bg-opacity-40 rounded-lg h-[max-content]'>        
        <div className='w-8/12'>
            <h1 className='font-bold text-xl mb-4'>{upcoming?upcomingLaunch.title:previouseLaunch.title}</h1>
            <p className='font-bold leading-none mb-3'>
                <span className='text-[#5f5f5f] text-xs'>MISSION NAME</span><br/>
                {mission_name}
            </p>
            <p className='font-bold leading-none mb-3'>
                <span className='text-[#5f5f5f] text-xs'>ROCKET</span><br/>
                {data.rocket.rocket_name}
            </p>
            <p className='font-bold leading-none mb-3'>
                <span className='text-[#5f5f5f] text-xs'>FLIGHT NUMBER</span><br/>
               {flight_number}
            </p>
            <p className='font-bold leading-none mb-3'>
                <span className='text-[#5f5f5f] text-xs'>TIME (UTC)</span><br/>
                {newDate}, {newTime}
            </p>
            <p className='font-bold leading-none mb-3'>
                <span className='text-[#5f5f5f] text-xs'>LINKS</span><br/><br/>
               <a className={`mr-1 p-1 bg-[#5f5f5f] bg-opacity-40 rounded-full ${!data.links.wikipedia?"cursor-not-allowed text-[#888888]":""}`} href={data.links.wikipedia} target='_blank'>
                    <i class="fa-brands fa-wikipedia-w"></i>
               </a> 
               <a className={`mr-1 p-1 bg-[#5f5f5f] bg-opacity-40 rounded-full ${!data.links.video_link?"cursor-not-allowed text-[#888888]":""}`} href={data.links.video_link} target='_blank'>
                    <i class="fa-brands fa-youtube"></i>
                </a> 
               <a className={`mr-1 p-1 bg-[#5f5f5f] bg-opacity-40 rounded-full ${!data.links.reddit_campaign?"cursor-not-allowed text-[#888888]":""}`} href={data.links.reddit_campaign} target='_blank'>
                    <i class="fa-brands fa-reddit-alien"></i>
                </a>
            </p>
        </div>
        <div className='mt-12 w-4/12'>
            <p className='font-bold leading-none mb-3 text-[#5f5f5f] text-xs'>
            {upcoming?upcomingLaunch.rocketLogo:previouseLaunch.rocketLogo}
            </p>
            <p className='bg-[#5f5f5f] p-3 rounded-lg bg-opacity-40'>
                <img src={mission_patch_small? mission_patch_small:"https://images2.imgbox.com/eb/d8/D1Yywp0w_o.png"} alt='Rocket Logo' className='max-w-[100px]'/>
            </p>   
            <p className='font-bold leading-none mt-5'>
                <span className='text-[#5f5f5f] text-xs'>LAUNCHPAD</span><br/>
                {data.launch_site.site_name}
            </p>

        </div>      

    </div>
  )
}

export default LaunchCard