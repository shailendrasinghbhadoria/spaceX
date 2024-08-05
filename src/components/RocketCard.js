import React, {useState} from 'react'
import '../App.css'


const RocketCard = ({data}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };

  return (
    <>
    <div className='w-4/12 p-6'>
        <h1 className='text-2xl font-semibold mb-3'>{data.rocket_name}</h1>
        {/* <Link to={`/rockets/${data.rocket_id}`} onclick={openModal}> */}
            <div className='hover:scale-105 cursor-pointer relative' onClick={openModal}>
                <img src={data.flickr_images[0]} className="min-h-[325px] max-w-[230px] rounded-lg"  />
                <p className='bg-green-700 inline-block text-lg font-bold p-2 rounded-md bg-opacity-50 leading-none absolute top-[270px]'>
                <span className='text-sm opacity-40'>
                    STATUS<br/>                
                </span>
                {data.active?"Active":"In Developement"}
            </p>

            </div>
        {/* </Link> */}
        
    </div>
    {isModalOpen && (
        <div className="modal-overlay z-50">
          <div className="modal-content">
            <p className='text-right'>
                <button onClick={closeModal} className="close-modal-btn text-black">
                X
                </button>
            </p>  
            <div className='flex'>
            <div className='p-2'>
                <img src={data.flickr_images[0]} className="min-h-[325px] max-w-[230px] rounded-lg"  />
            </div>
            <div className='text-left pl-3'>  
                <h4 className='text-[#333] font-semibold pt-2'>Description</h4>
                <p className='text-black'>{data.description}</p>
            </div>
            </div>
          </div>
          
        </div>
      )}
    </>
    
  )
}

export default RocketCard