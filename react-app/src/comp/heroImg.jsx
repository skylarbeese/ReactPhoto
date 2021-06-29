import React, { useEffect } from 'react'
import Arr from './../imgArray'
import { Parallax } from 'react-scroll-parallax';
function HeroImg({slides}) {
    const[active, setActive] = React.useState(0)
    const[mouse, setMouse] = React.useState(false)
    
  

    React.useEffect(() => {
      const interval = setInterval(() => {
        setActive(active === length  - 1 ? 0 : active + 1)
      }, 4000)
      return () => clearInterval(interval)
    }, [active])

   
    const length = slides.length
    
    const nextSlide = () => {
       setActive(active === 0 ? length - 1 : active - 1)
    }
    const prevSlide = () => {
      setActive(active ===  length - 1 ? 0 :  active + 1)
    }
    if(!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }
  return (
   <>
   <section>
   <div className="">
    
    <div className="img-con" onMouseOver={() => setMouse(true)} onMouseOut={() => setMouse(false)}>
    <div className="arrows">
            <div className={`right ${mouse ? 'left-arrows-apear' : 'left-arrows-hide'}`} onClick={prevSlide}><i class="fas fa-caret-left"></i></div>
            <div className={`left ${mouse ? 'right-arrows-apear' : 'right-arrows-hide'}`} onClick={nextSlide}><i class="fas fa-caret-right"></i></div>
        </div>
     
    <div className="grad-hero"></div> 
    <div className="slider">
       
    {Arr.map((im, index) => {
       return  <div key={index}>
          {index === active &&  <div className="slide-img" style= {{backgroundImage: `url(${im})` }}></div>}
        </div>})}
        
    </div>
  
    </div>
 
    </div>
    </section>
   </>
  );
}

export default HeroImg;