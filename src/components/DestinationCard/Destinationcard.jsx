import React from 'react'
import './DestinationCard.css';

function Destinationcard(probs) {
  return (
    <div className='flexCenter innerWidth card-container'>
        {/* left section */}
        <div className=' flexColStart destina-left'>
            <p><span className='num'> 0{probs.index}</span> PICK YOUR DESTINATION</p>
            <img src={probs.image} alt="" />
        </div>
      {/* right section */}
      <div className=' flexColStart destina-right'>
        <span>
            {probs.name}
        </span>
        <span>
            {probs.description}
        </span>
        <div className='detail'>
            <div>
                <p  className='detail-sub-con'>
                Avg. distance
                </p>
                <p className='detail-con'>
                    {probs.kilometer}
                </p>
            </div>
            <div>
            <div>
                <p className='detail-sub-con'>
                Est. travel time
                </p>
                <p className='detail-con'>
                    {probs.days}
                </p>
            </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Destinationcard
