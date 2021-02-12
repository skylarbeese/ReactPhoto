import React from 'react'
//import Arr from './imgArray'
import Nav from './comp/nav'
import HeroImg1 from './comp/heroImg1'
import Cat from './comp/cat'
import Banner from './comp/banner'
import Gallery from './comp/gallery'
import Footer from './comp/footer'
import Video from './comp/video'
import { ParallaxProvider } from 'react-scroll-parallax';
//import Arr2 from './imgArr2'

function Home() {

  return (
   <>
    <section>
     <Nav />
     
     <HeroImg1 />
     <Cat />
     <ParallaxProvider>
       <Banner />
     </ParallaxProvider>
     
     <Gallery /> 
    
      <Video />
    
     <Footer />
     </section>
   </>
);
}

export default Home;
