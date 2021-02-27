import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  const [win, setWin] = React.useState(false)
  console.log(win)
 const hand = () => {
    if(window.innerWidth > 800) {
      setWin(true)
    } else {
      setWin(false)
    }
  }
  window.addEventListener("resize", hand);
 React.useEffect(() => {
    hand()
}, []);  
  return (
   <>
    <div className="footer-con">
    {win ? (<div className="footer-text">
        <div className="name">
        <h1>Skylar Beese</h1>
        </div>
         <div  className="logo">
         <Link to=""><h1>S<span>B</span>PHOTO</h1></Link>
         <div className="link-font">
             <h1><i class="fab fa-instagram"></i></h1>
             <h1><i class="fab fa-facebook-f"></i></h1>
             </div>
         </div>
      </div>) : ( <div className="name">
        <h1>Skylar Beese</h1>
        </div>) }
       
    </div>
   </>
  );
}

export default Footer;