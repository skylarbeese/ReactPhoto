import React from 'react'
import Arr from './../imgArray'

function HeroImg({slides}) {
    const[active, setActive] = React.useState(0)
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
   <div className="">
      <div className="arrows">
            <div className="right" onClick={prevSlide}> right </div>
            <div className="left" onClick={nextSlide}> left </div>
        </div>
    <div className="img-con">
     
    <div className="grad-hero"></div> 
    <div className="slider">
    {Arr.map((im, index) => {
       return   <div key={index}>
          {index === active &&  <div className="slide-img" style= {{backgroundImage: `url(${im})`}}></div>}
        </div> 
        })}
    </div>
    </div>
    </div>
   </>
  );
}

export default HeroImg;