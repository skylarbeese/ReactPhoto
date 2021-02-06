import React from 'react'
import Arr from './../imgArray'

function Cat() {
 
  return (
   <>
    <div className="cat-con">
        <div className="cat-text">
            <h1>This is the Title</h1>
            <div className="underline"></div>
            <p>Bacon ipsum dolor amet salami venison doner flank. Bacon prosciutto pork belly 
                capicola tri-tip burgdoggen. Chislic meatloaf meatball, beef ribs 
               
            </p>
        </div>
        <div className="img-cat">
           {Arr.map(im => {
               return (
                <>
                <div class="im-con">
                  <div className="grad-small"></div>
                  <div className="image-grid" style= {{backgroundImage: `url(${im})`}}></div>
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