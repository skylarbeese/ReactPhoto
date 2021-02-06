import React from 'react'
import Arr from './imgArray'
import Nav from './comp/nav'
import HeroImg from './comp/heroImg'
import Cat from './comp/cat'
import Banner from './comp/banner'
import Gallery from './comp/gallery'
import Footer from './comp/footer'
function Home() {

  return (
   <>
    
     <Nav />
     <HeroImg slides={Arr}/>
     <Cat />
     <Banner />
     <Gallery />
     <Footer />
   </>
);
}

export default Home;
