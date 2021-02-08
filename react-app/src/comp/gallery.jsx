import React from 'react'
import Arr from './../imgArr2'
import {useWindowScroll} from 'react-use'
import {Link} from 'react-router-dom'
function Gallery() {
    const[show, setShow] = React.useState(false)
    const {y: pageYOffset } = useWindowScroll()
    console.log(pageYOffset)
    //console.log(show)
    React.useEffect(() => {
       if(pageYOffset > 1700) {
          setShow(true)
        } else {
          setShow(false)
        }
       
    }, [pageYOffset])


  return (
   <>
   <section className="section">
    <div className="gallery-con">
    <div className="gallery-text">
            <h1 className={show ? 'header-show' : 'header-hide'}>This is the Title</h1>
            <div className={`underline ${show ? 'under-gal-show' : 'under-gal-hide'}`}></div>
            <p className={show ? 'para-gal-show' : 'para-gal-hide'}>Bacon ipsum dolor amet salami venison doner flank. Bacon prosciutto pork belly 
                capicola tri-tip burgdoggen. Chislic meatloaf meatball, beef ribs 
               
            </p>
     
        </div>
        <div className="gallery-imgs">
        {Arr.map(im => {
            return   <div className={`gal-img ${show ? 'img-gal-show' : 'img-gal-hide'}`} style= {{backgroundImage: `url(${im})`}}></div>
        })}
        </div>
       <div className="btn">
           <Link to="/comp/galleryPage"><h2 style={{fontStyle: 'italic'}}>click here</h2></Link>
       </div>
    </div>
    </section>
   </>
  );
}

export default Gallery;