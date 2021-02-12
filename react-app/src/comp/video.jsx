import React from 'react'
import Arr from './../videoArr'
import ArrImg from './../ArrHover'
import HoverVideoPlayer from 'react-hover-video-player';
import {useWindowScroll} from 'react-use'
function Video() {

 const[show, setShow] = React.useState(false)
 

    const {y: pageYOffset } = useWindowScroll()
    console.log(pageYOffset)
    console.log(show)
   
    React.useEffect(() => {
       if(pageYOffset > 2700) {
          setShow(true)
        } else {
          setShow(false)
        }
        
       
    }, [pageYOffset])
  return (
   <>
     <div className={`vid-con ${show ? 'color' : 'color-hide'}`}>
         <div className="vid-back">
             <div className="video" >
            {/* <HoverVideoPlayer
                 videoSrc={Arr[0]}
                 pausedOverlay={
                    <div 
                    className={`image-vid `}  
                    style= {{backgroundImage: `url(${ArrImg[0]})`}}
                    >
                </div> 
                }
                loadingOverlay={
                <div className="loading-spinner-overlay" /> 
             
                /> */}
              <video  loop muted preload  onMouseOver={event => event.target.play()}
                      onMouseOut={event => event.target.pause()}>
                    <source src={Arr} type="video/mp4" />
              
               
          <div 
             className={`image-vid `}  
             style= {{backgroundImage: `url(${ArrImg})`}}
             >
         </div> 
        
            </video> 
      
         </div> 
         </div>
        </div> 
   </>
  );
}

export default Video;