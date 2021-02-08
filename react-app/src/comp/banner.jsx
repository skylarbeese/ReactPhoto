import React, { useEffect } from 'react'
import Arr from './../imgArray'
import {useWindowScroll} from 'react-use'
import { Parallax } from 'react-scroll-parallax';
function Banner() {
    const[show, setShow] = React.useState(false)
    const {y: pageYOffset } = useWindowScroll()
    console.log(pageYOffset)
    //console.log(show)
    React.useEffect(() => {
       if(pageYOffset > 1400) {
          setShow(true)
        } else {
          setShow(false)
        }
       
    }, [pageYOffset])
  return (
   <>
   <section>
    <div className="banner-con">
     <div className={`banner-text`}>
            <h1 className={show ? 'ban' : 'trans'}>This is the Title</h1>
            <div className={`underline ${show ? 'under-hide' : 'under'}`}></div>
            <p className={show ? 'para-hide' : 'para'}>Bacon ipsum dolor amet salami venison doner flank. Bacon prosciutto pork belly 
                capicola tri-tip burgdoggen. Chislic meatloaf meatball, beef ribs 
               
            </p>
        </div>
        <div className="grad"></div>         
          <div className="banner-img">
     
             <div className="image-banner " style= {{backgroundImage: `url(${Arr[0]})`}}></div>
        
        </div>
    </div>
    </section>
   </>
  );
}

export default Banner;