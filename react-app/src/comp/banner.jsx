import React, { useEffect } from 'react'
import Arr from './../imgArray'
import {useWindowScroll} from 'react-use'
import { Parallax } from 'react-scroll-parallax';
function Banner() {
    const[show, setShow] = React.useState(false)
    const[offsetY, setOffsetY] = React.useState(0)
    const handleScroll = () => setOffsetY(window.pageYOffset)

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
    const divStyle = {
      
      transform:`translateY(${ offsetY * 0.5}px)`
    }
  return (
   <>
   <section>
    <div className="banner-con">
     <div className={`banner-text`}>
            <h1 className={show ? 'ban' : 'trans'}>what Im about</h1>
            <div className={`underline ${show ? 'under-hide' : 'under'}`}></div>
            <p className={show ? 'para-hide' : 'para'}>
                 I am a photogarpher base in Utah county. Looking for adventure and amazing sceens. My goal is
                 to capture the beauty that the state holds
            </p>
        </div>
        <div className="grad"></div>  
           
          <div className="banner-img ">
     
             <div className="image-banner " style= {{backgroundImage: `url(${Arr[0]})`}}></div>
        
        </div>
      
    </div>
    </section>
   </>
  );
}

export default Banner;