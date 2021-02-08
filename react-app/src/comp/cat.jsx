import React from 'react'
import Arr from './../imgArray'
import {useWindowScroll} from 'react-use'
function Cat() {
    const[show, setShow] = React.useState(false)
    const {y: pageYOffset } = useWindowScroll()
    console.log(pageYOffset)
    //console.log(show)
    React.useEffect(() => {
       if(pageYOffset > 800) {
          setShow(true)
        } else {
            setShow(false)
        }
       
    }, [pageYOffset])
  return (
   <>
    <div className="cat-con">
        <div className="cat-text">
            <h1 className={show ? 'title' : 'title-hide'}>This is the Title</h1>
            <div className={`underline ${show ? 'under-cat' : 'under-cat-hide'}`}></div>
            <p className={show ? 'para-cat' : 'para-cat-hide'}>Bacon ipsum dolor amet salami venison doner flank. Bacon prosciutto pork belly 
                capicola tri-tip burgdoggen. Chislic meatloaf meatball, beef ribs 
               
            </p>
        </div>
        <div className={`img-cat`}>
           {Arr.map(im => {
               return (
                <>
                <div class={`im-con ${show ? 'img-grid-trans' : 'img-grid-trans-hide'} `}>
                  <div className="grad-small"></div>
                  <div className={`image-grid `} style= {{backgroundImage: `url(${im})`}}></div>
                  <div className="cat-im-text">
                      <h1>Hello</h1>
                  </div>
               </div>
               </>
               )
           })}
        </div>
    </div>
   </>
  );
}

export default Cat;