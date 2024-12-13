import React from 'react'
import imglogo from '../assets/images/logo.png'


function Footer() {
    return (
        <>
            <div className="container-fluid footercontainfluid">
                <div className="container footerincontaian">
                    <div className="row">
                        <div className="col-sm-9 col1footr1">
                            <h1>Ready To Work With Us?</h1>
                        </div>
                        <div className="col-sm-3 col2footr1">

                            {/* <input type="email" id="email" name="email" placeholder="Your email..." /> */}
                            {/* <a href="/" style={{ textDecoration: "none" }}><i className="fa-solid fa-arrow-pointer" />
                            </a>
                            */}

                            {/* <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <i className="fa-solid fa-arrow-pointer" /> */}
                            <div className="row">
                                <div className="col-sm-9 col9input">
                                <input type="email" id="email" name="email" placeholder="Your email..." />
                                </div>
                                <div className="col-sm-3 col3input">
                                <a href="/" style={{ textDecoration: "none" }}><i className="fa-solid fa-arrow-pointer" /></a>
                                </div>
                            </div>
                            

                        </div>
                    </div>
                    <hr className='hrlinenew' />

                    <div className="row rowseclastfooter">
                        <div className="col-sm-5 col1footer2">
                            <img src={imglogo} alt="logo" className='logoimgfooter' /> <br /> <br />
                            <p style={{ color: "gray" }}>7176 Blue Spring Lane Santa Monica, CA 90403</p>
                            <p style={{ color: "gray" }}>Info.colorlib@gmail.com +84 123 456 789</p>
                            <div className="row r1iconsfooter">
                                <div className="col-sm-1">
                                    <i class="fa-brands fa-facebook-f footerficon"></i>
                                </div>
                                <div className="col-sm-1 firstifbl">
                                    <i class="fa-brands fa-twitter footerticon"></i>
                                </div>
                                <div className="col-sm-1 firstifbl">
                                    <i class="fa-brands fa-instagram footerinsicon"></i>
                                </div>
                                <div className="col-sm-1 firstifbl">
                                    <i class="fa-brands fa-linkedin-in footerinicon"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2 col2footer2">
                            <h4 style={{ color: "white" }}>Company</h4> 
                            <p className='thsameh4'>About Us</p>
                            <p>Services</p>
                            <p>Our Works</p>
                            <p>Careers</p>
                            <p>FAQs</p>
                        </div>

                        <div className="col-sm-2 col3footer2">
                            <h4 style={{ color: "white" }}>Services</h4> 
                            <p className='thsameh4'>Architecture</p>
                            <p>Interior Design</p>
                            <p>Exterior Design</p>
                            <p>Planning</p>
                        </div>

                        <div className="col-sm-2 col4footer2">
                            <h4 style={{ color: "white" }}>Get in Touch</h4> 
                            <p className='thsameh4'>7176 Blue Spring Lane
                                Santa Monica, CA 90403</p>
                            <p>Info.colorlib@gmail.com
                                +84 123 456 789</p>
                        </div>
                    </div>

                    <hr className='hrlinenew1' />

                    <p className="fcpr">Copyright © 2024 All rights reserved | This template is made with <i className="fa-solid fa-heart fheart"></i>  by <a href="#" className="fcl">Colorlib</a></p>
                    <div className="rdivlast">
                        <a href="/" style={{textDecoration:'none',color:"gray"}}><p>Terms of Use | Privacy Policy</p></a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer