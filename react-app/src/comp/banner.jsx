import React, { useEffect } from 'react'
import Arr from './../imgArray'
import {useWindowScroll} from 'react-use'
function Banner() {
    const[show, setShow] = React.useState(false)
    const {y: pageYOffset } = useWindowScroll()
    React.useEffect(() => {
       if(pageYOffset > 600) {
          setShow(true)
          
       }
    }, [pageYOffset])
  return (
   <>
    <div className="banner-con">
       {show ? (<div className="banner-text">
            <h1>This is the Title</h1>
            <div className="underline"></div>
            <p>Bacon ipsum dolor amet salami venison doner flank. Bacon prosciutto pork belly 
                capicola tri-tip burgdoggen. Chislic meatloaf meatball, beef ribs 
               
            </p>
        </div>) : ''}
        <div className="grad"></div>
        <div className="banner-img">
       
             <div className="image-banner " style= {{backgroundImage: `url(${Arr[0]})`}}></div>
      
        </div>
    </div>
   </>
  );
}

export default Banner;