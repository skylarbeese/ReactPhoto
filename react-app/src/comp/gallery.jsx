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
  
    <div className="gallery-con">
    <div className="gallery-text">
            <h1 className={show ? 'header-show' : 'header-hide'}>view my photo gallery here!</h1>
            <div className={`underline ${show ? 'under-gal-show' : 'under-gal-hide'}`}></div>
            <p className={show ? 'para-gal-show' : 'para-gal-hide'}>
                view my body of work by clicking on the link below or on the menu at the top of the page. my work 
                consist of outdoor and landscape photography. most of which was taken right here in the beautiful
                and stunning mountains of Utah.
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

   </>
  );
}

export default Gallery;