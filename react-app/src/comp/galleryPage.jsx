import React from 'react'
import Nav from './nav'
import Footer from './footer'
import ArrGal from './../imgGalArray'
import Modal from './modal/modal'
function GalPage() {
  //const[imgUrl, setImgUrl] = React.useState('')
 // const[imgArr, setImgArr] = React.useState([])
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
   {showModal ? (<Modal popImgUrl={popImgUrl} closePop={handlePopUp}/>) : null}
   <Nav />
    <div className="gal-page-con">
       <h1>gallery page</h1>
       <div className="galPage-img-con">
         <div className="galPage-grid">
         {ArrGal.map((imgUrl, index) => {
           return (<div className="gal-page-img-con">
             <div className={`image-gal-page ${index}`} 
             style= {{backgroundImage: `url(${imgUrl})`}}
             onClick={() => handlePopUp(imgUrl)}
             key={index}
             ></div>
             </div>)
         })}
       </div>
       </div>
    </div>
    <Footer />
   </>
  );
}

export default GalPage;