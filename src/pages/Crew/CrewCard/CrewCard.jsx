import React from 'react';
import './CrewCard.css';

function CrewCard(probs) {
  return (
    <div className='flexCenter innerWidth paddings crew-container'>
         <p>{probs.index}</p>
        {/* left section */}
      <div className='flexColStart crew-left'>
        <p>
            {probs.role}
        </p>
        <p>
            {probs.name}
        </p>
        <p  style={{width: '80%'}}>
            {probs.bio}
        </p>
      </div>
      {/* right section */}
      <div className='flexColCenter crew-right'>
        <img src={probs.image} alt="" />
        <div></div>
      </div>
    </div>
  )
}

export default CrewCard
