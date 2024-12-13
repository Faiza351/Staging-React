import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import '../StyleContact.css'
import imgsm1 from '../assets/images/ci-1.png'
import imgsm2 from '../assets/images/ci-2.png'
import imgsm3 from '../assets/images/ci-3.png'
import Footer from '../components/Footer'

function Contact() {
  return (
    <>
      <div className="container-fluid projectcfcontact">
        <Navbar />
      </div>

      <div className="firstdiv">
        <h6 style={{ color: "#F28C28" }}>INFORMATION</h6>
        <h1 className='firstheading'>CONTACT DETAILS</h1>
        <p className='firstext'>As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.</p>
      </div>

      <div className="container contactcontainer">
        <div className="row">
          <div className="col-sm-4 columnfirst">
            <div className="row">
              <div className="col-sm-2">
                <img src={imgsm1} alt="imgsm1" className='imgsm1' />
              </div>
              <div className="col-sm-10 innercolumn1">
                <h5 style={{ color: "#F28C28" }}>Phone Number</h5>
                <p>+01 123 456 789</p>
              </div>
            </div>

          </div>
          <div className="col-sm-4 columnsecond">
            <div className="row">
              <div className="col-sm-2">
                <img src={imgsm2} alt="imgsm2" className='imgsm2' />
              </div>
              <div className="col-sm-10 innercolumn1 ">
                <h5 style={{ color: "#F28C28" }}>Phone Number</h5>
                <p>+01 123 456 789</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 columnthird">
            <div className="row">
              <div className="col-sm-2">
                <img src={imgsm3} alt="imgsm3" className='imgsm3' />
              </div>
              <div className="col-sm-10 innercolumn1">
                <h5 style={{ color: "#F28C28" }}>Phone Number</h5>
                <p>+01 123 456 789</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mapcontainer ratio ratio-16x9">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96714.68291250926!2d-74.05953969406828!3d40.75468158321536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20Nowy%20Jork%2C%20Stany%20Zjednoczone!5e0!3m2!1spl!2spl!4v1672242259543!5m2!1spl!2spl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>

        <div className="secdiv">
          <h6 style={{ color: "#F28C28" }}>FORM</h6>
          <h1 className='secheading'>GET IN TOUCH</h1>
          <p className='sectext'>As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.</p>
        </div>


        <div className="row rowinput">
          <div className="col-sm-4 firstcolinpname">
            <input type="text" id="namecontact" name="namecontact" placeholder="Name" />
          </div>
          <div className="col-sm-4 seccolinpname">
            <input type="email" id="emailcontact" name="emailcontact" placeholder="Email" />
          </div>
        </div>
        <input type="text" id='message' name='message' placeholder='Message' />
        <br />
        <button type='button' className='formbtnew'><b>Send Message</b></button>
      </div>




     <Footer />


    </>
  )
}

export default Contact