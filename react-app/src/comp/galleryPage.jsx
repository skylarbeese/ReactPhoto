import React from 'react'
import Nav from './nav'
import Footer from './footer'
import ArrGal from './../imgGalArray'
import Modal from './modal/modal'
function GalPage() {
  
  const[showModal, setShowModal] = React.useState(false)
  const[popImgUrl, setPopImgUrl] = React.useState('')
  const handlePopUp = (imgUrl) => {
     setShowModal(!showModal);
     setPopImgUrl(imgUrl)
  }

  console.log(popImgUrl)
  console.log(showModal)
  return (
   <>
   {showModal ? (<Modal popImgUrl={popImgUrl} closePop={handlePopUp} />) : null}
   <Nav />
    <div className="gal-page-con">
  
       <div className="galPage-img-con">
         <div className="galPage-grid">
         {ArrGal.map((imgUrl, index) => {
           return (
             <img
             className={`image-gal-page img-${index}`} 
            
             src={imgUrl}
             onClick={() => handlePopUp(imgUrl)}
             key={index}
             />
            )
         })}
       </div>
       </div>
    </div>
    <Footer />
   </>
  );
}

export default GalPage;