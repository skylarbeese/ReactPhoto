import React from 'react'
import Nav from './nav'
import Footer from './footer'
import ArrGal from './../imgGalArray'
import Modal from './modal/modal'
import Arr from './../imgGalArray'
import {useWindowScroll} from 'react-use'
function GalPage() {
  const {y: pageYOffset } = useWindowScroll()
  const[imgMove, setImgMove] = React.useState(false)
  const[imgMoveRow2, setImgMoveRow2] = React.useState(false)
  const[imgMoveRow3, setImgMoveRow3] = React.useState(false)
  const[imgMoveRow4, setImgMoveRow4] = React.useState(false)
  const[imgMoveRow5, setImgMoveRow5] = React.useState(false)
  const[imgMoveRow6, setImgMoveRow6] = React.useState(false)

  const[showModal, setShowModal] = React.useState(false)
  const[popImgUrl, setPopImgUrl] = React.useState('')
  const handlePopUp = (imgUrl) => {
     setShowModal(!showModal);
     setPopImgUrl(imgUrl)
  }
 



React.useEffect(() => {
  if(pageYOffset >= 0) {
    setImgMove(true)
  

  } else {
    setImgMove(false)
   
  }

  /*----------------------------*/
  if(pageYOffset >= 0) {
  
    setImgMoveRow2(true)

  } else {
  
    setImgMoveRow2(false)
  }
  /*----------------------------*/
  if(pageYOffset > 800) {
  
     setImgMoveRow3(true)
 
   } else {
   
     setImgMoveRow3(false)
   }
   /*----------------------------*/
   if(pageYOffset > 900) {
  
    setImgMoveRow4(true)

  } else {
  
    setImgMoveRow4(false)
  }
  /*----------------------------*/
  if(pageYOffset > 1200) {
  
    setImgMoveRow5(true)

  } else {
  
    setImgMoveRow5(false)
  }
  /*----------------------------*/
  if(pageYOffset > 1400) {
  
    setImgMoveRow6(true)

  } else {
  
    setImgMoveRow6(false)
  }
  /*----------------------------*/
}, [pageYOffset]) 
//console.log(pageYOffset)

 // console.log(popImgUrl)
 // console.log(showModal)
  return (
   <>
   {showModal ? (<Modal popImgUrl={popImgUrl} closePop={handlePopUp} />) : null}
   <Nav />
    <div className={`gal-page-con `}>
  
       <div className={`galPage-img-con `}>
         <div className={`galPage-grid `}>
        {/*ArrGal.map((imgUrl, index) => {
           return (
             <img
             className={`image-gal-page img-${index}`} 
            
             src={imgUrl}
             onClick={() => handlePopUp(imgUrl)}
             key={index}
            />
            )
       })*/}  
         
         <img
             className={`image-gal-page img-0 ${imgMove ? 'show-gal' : 'hide-gal'}`}  src={ArrGal[0]} onClick={() => handlePopUp(ArrGal[0])}
          />
           <img
             className={`image-gal-page img-1 ${imgMove ? 'show-gal' : 'hide-gal'}`}  src={ArrGal[1]} onClick={() => handlePopUp(ArrGal[1])}
          />
           <img
             className={`image-gal-page img-2 ${imgMoveRow2 ? 'show-gal' : 'hide-gal'}`}  src={ArrGal[2]} onClick={() => handlePopUp(ArrGal[2])}
          />
           <img
             className={`image-gal-page img-3 ${imgMoveRow2 ? 'show-gal' : 'hide-gal'}`}  src={ArrGal[3]} onClick={() => handlePopUp(ArrGal[3])}
          />
           <img
             className={`image-gal-page img-4 ${imgMoveRow2 ? 'show-gal' : 'hide-gal'}`}  src={ArrGal[4]} onClick={() => handlePopUp(ArrGal[4])}
          />
           <img
             className={`image-gal-page img-5 ${imgMoveRow3 ? 'show-gal' : 'hide-gal'}`}  src={ArrGal[5]} onClick={() => handlePopUp(ArrGal[5])}
          />
           <img
             className={`image-gal-page img-6 ${imgMoveRow3 ? 'show-gal' : 'hide-gal'}`}  src={ArrGal[6]} onClick={() => handlePopUp(ArrGal[6])}
          />
           <img
             className={`image-gal-page img-7 ${imgMoveRow3 ? 'show-gal' : 'hide-gal'}`}  src={ArrGal[7]} onClick={() => handlePopUp(ArrGal[7])}
          />
           <img
             className={`image-gal-page img-8 ${imgMoveRow3 ? 'show-gal' : 'hide-gal'}`}  src={ArrGal[8]} onClick={() => handlePopUp(ArrGal[8])}
          />
           <img
             className={`image-gal-page img-9 ${imgMoveRow4 ? 'show-gal' : 'hide-gal'}`}  src={ArrGal[9]} onClick={() => handlePopUp(ArrGal[9])}
          />
           <img
             className={`image-gal-page img-10 ${imgMoveRow4 ? 'show-gal' : 'hide-gal'}`}  src={ArrGal[10]} onClick={() => handlePopUp(ArrGal[10])}
          />
           <img
             className={`image-gal-page img-11 ${imgMoveRow4 ? 'show-gal' : 'hide-gal'}`}  src={ArrGal[11]} onClick={() => handlePopUp(ArrGal[11])}
          />
           <img
             className={`image-gal-page img-12 ${imgMoveRow5 ? 'show-gal' : 'hide-gal'}`}  src={ArrGal[12]} onClick={() => handlePopUp(ArrGal[12])}
          />
          <img
             className={`image-gal-page img-13 ${imgMoveRow5 ? 'show-gal' : 'hide-gal'}`}  src={ArrGal[13]} onClick={() => handlePopUp(ArrGal[13])}
          />
          <img
             className={`image-gal-page img-14 ${imgMoveRow5 ? 'show-gal' : 'hide-gal'}`}  src={ArrGal[14]} onClick={() => handlePopUp(ArrGal[14])}
          />
          <img
             className={`image-gal-page img-15 ${imgMoveRow6  ? 'show-gal' : 'hide-gal'}`}  src={ArrGal[15]} onClick={() => handlePopUp(ArrGal[15])}
          />
          
       </div>
       </div>
    </div>
    <Footer />
   </>
  );
}

export default GalPage;