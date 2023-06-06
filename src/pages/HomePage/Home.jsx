import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='innerWidth home-container' style={{backgroundImage: window.innerWidth <= 768 ? `url("assets/home/bg-t.jpg")` : window.innerWidth <= 375 ? `url("assets/home/bg-m.jpg")` :`url("assets/home/bg-d.jpg")` }}>
     <div className='flexCenter innerWidth paddings home-sub-con'>
      {/* left section */}
        <div className='flexColStart home-left-section'>
            <p>
            So, you want to travel to
            </p>
            <h2>
            Space
            </h2>
            <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
            </p>
        </div>
      {/* right section */}
        <div className='flexCenter'>
          <div className='explore'>
              Explore
          </div>
        </div>
     </div>
    </div>
  )
}

export default Home
