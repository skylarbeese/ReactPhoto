import React from 'react'
import Arr from './../imgArray'

function HeroImg() {
    const[] = React.useState()
  return (
   <>
    <div className="img-con">
    <div className="grad"></div>
    <div className="slider">
    {Arr.map(im => {
            return /*  <div className="slide-img" style= {{backgroundImage: `url(${im})`}}></div> */
        })}
    </div>
    </div>
   </>
  );
}

export default HeroImg;