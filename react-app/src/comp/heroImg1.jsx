import React from 'react'
import Arr from './../imgArray'
import HeroImg from './heroImg'
import { ParallaxProvider } from 'react-scroll-parallax';
function HeroImg1() {
   return(
       <>
         <ParallaxProvider>
       <HeroImg slides={Arr}/>
       </ParallaxProvider>
       </>
   )
  
}

export default HeroImg1;