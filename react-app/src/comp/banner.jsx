import React from 'react'
import Arr from './../imgArray'

function Banner({banner}) {
  return (
   <>
    <div className="banner-con">
        <div className="banner-text">
            <h1>This is the Title</h1>
            <div className="underline"></div>
            <p>Bacon ipsum dolor amet salami venison doner flank. Bacon prosciutto pork belly 
                capicola tri-tip burgdoggen. Chislic meatloaf meatball, beef ribs 
               
            </p>
        </div>
        <div className="grad"></div>
        <div className="banner-img">
       
             <div className="image-banner " style= {{backgroundImage: `url(${Arr[0]})`}}></div>
      
        </div>
    </div>
   </>
  );
}

export default Banner;