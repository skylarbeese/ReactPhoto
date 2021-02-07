import React from 'react'
import Arr from './../imgArray'
import Nav from './nav'
import Footer from './footer'
function Contact() {
 
  return (
   <>
   <Nav />
    <div className="contact-con">
      <div className="contact-text">

      </div>
      <div className="contact-footer-img">
      <div className="footer-img" style= {{backgroundImage: `url(${Arr[0]})`}}></div>
      </div>
      <div className="con-form">
        <form>
           <input type="text" name="" />
           <input type="text" name="" />
           <textarea name="" id="" cols="30" rows="10"></textarea>
           <button>send message</button>
        </form>
      </div>
    </div>
    <Footer />
   </>
  );
}

export default Contact;