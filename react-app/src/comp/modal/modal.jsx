import React from 'react'

function Modal({popImgUrl, closePop}) {
 const[on, setOn] = React.useState(false)
  return (
   <>
     <div className={`modal-con  `} onClick={closePop}>
         <div className="modal-img" >
            <div className="modal-image"   style= {{backgroundImage: `url(${popImgUrl})`}}></div>
         </div>
     </div>
   </>
  );
}

export default Modal;