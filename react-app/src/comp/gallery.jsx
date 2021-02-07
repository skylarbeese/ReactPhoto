import React from 'react'
import Arr from './../imgArr2'

import {Link} from 'react-router-dom'
function Gallery() {
  return (
   <>

    <div className="gallery-con">
    <div className="gallery-text">
            <h1>This is the Title</h1>
            <div className="underline"></div>
            <p>Bacon ipsum dolor amet salami venison doner flank. Bacon prosciutto pork belly 
                capicola tri-tip burgdoggen. Chislic meatloaf meatball, beef ribs 
               
            </p>
     
        </div>
        <div className="gallery-imgs">
        {Arr.map(im => {
            return   <div className="gal-img" style= {{backgroundImage: `url(${im})`}}></div>
        })}
        </div>
       <div className="btn">
           <Link to="/comp/galleryPage"><h2 style={{fontStyle: 'italic'}}>click here</h2></Link>
       </div>
    </div>
   </>
  );
}

export default Gallery;