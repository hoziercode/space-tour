import React from 'react';
import './TechnologyCard.css';

function TechnologyCard(probs) {
  return (
    <div className='flexCenter innerWidth tech-card'>
        {/* left side */}
      <div className='flexColStart tech-left'>
        <p>
            THE TECHNOLOGY
        </p>
        <p>
            {probs.name}
        </p>
        <p>
            {probs.description}
        </p>
      </div>
      {/* right side */}
      <div className='flexColCenter tech-right'>
        <img src={probs.image} alt=""/>
      </div>
    </div>
  )
}

export default TechnologyCard
