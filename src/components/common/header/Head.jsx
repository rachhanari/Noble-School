import React from "react";
import { FaFacebook } from "react-icons/fa";
import img1 from "../../Assets/Images/School-logo.jpeg"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <div className="logo-img">
            <img src={img1} alt="logo"  />
            </div>
            <div className="content">
            <h2>NOBEL GURUKUL CONVENT <br/> SCHOOL AND JUNIOR COLLEGE</h2>
             <span>EMPOWERING STUDENTS WITH KNOWLEDGE, CREATIVITY, AND LIFELONG LEARNING</span>
             </div>
          </div>

          <div className='social'>
          {/* <FaFacebook /> */}
          <a href="https://www.facebook.com/profile.php?id=61552735989984&mibextid=ZbWKwL"  target="_blank" ><i className='fab fa-facebook icon'></i></a>
            <a href="https://www.instagram.com/nobel_gurukul_convent_school?igsh=aDl0NWg2cmEwMmw%3D" target="blank"><i className='fab fa-instagram icon'></i></a>
            <a><i className='fab fa-twitter icon'></i></a>
            <a href="https://www.youtube.com/@nobelgurukulconventschoola7857"  target="blank"><i className='fab fa-youtube icon'></i></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
