import React, { useState } from 'react'
import { Link,useResolvedPath, useMatch } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) =>{
    if(document.documentElement.clientWidth <= 690){
      return {right: !menuOpened && '-100%'}
    }
}
  return (
    <section className='na-wrapper'>
       <nav className='innerWidth flexCenter navbar innerWidth'>
        <img src="assets/shared/logo.svg" alt="" />
        <div className='flexCenter menu' style={getMenuStyles(menuOpened)}>
          <img src="assets/shared/icon-close.svg" alt="" className='close' onClick={()=> setMenuOpened ((prev) => !prev)}/>
        <div className='line'></div>
         <CustomLinks to=''>00 HOME</CustomLinks>
         <CustomLinks to='/destination'>01 DESTINATION</CustomLinks>
         <CustomLinks to='/crew'>02 CREW</CustomLinks>
         <CustomLinks to='/technology'>01 TECHNOLOGY</CustomLinks>
        </div>
        <img src='assets/shared/icon-hamburger.svg' className='na-image' onClick={()=> setMenuOpened ((prev) => !prev)}/>
    </nav>
    </section>
   
  )
}

export default Navbar

function CustomLinks ({to, children, ...probs}){
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path:resolvedPath.pathname, end: true})
  return (
    <Link to={to} {...probs} className={isActive ? 'a-tag active' : 'a-tag'} onClick={() => {
      window.scrollTo(0,0)
    }}>
      {children}
    </Link>
  )
}
