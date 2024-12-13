import React from 'react'
import '../StyleBlog.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import imgblog1 from '../assets/images/project-3.jpg'
import imgblog2 from '../assets/images/blog-2.jpg'
import imgcol2 from '../assets/images/ta-2.png'
import imgsign from '../assets/images/signature.png'
import imgblr from '../assets/images/br-1.jpg'
import imgblr2 from '../assets/images/br-2.jpg'
import imgblr3 from '../assets/images/br-3.jpg'

function Blog() {
    return (
        <>
            <div className="container-fluid blogcf">
                <Navbar />
                <h1 className='bloghead'>OUR PROJECTS</h1>
                <div className="centertexthblog">
                    <Link className='h5homeblog' to={'/'}><h5>Home</h5></Link>
                    <h5 className='h5blog'>~ Blogs</h5>
                </div>
            </div>

            <div className="container blogcontainer">
                <div className="row">
                    <div className="col-sm-8 maincol1">
                        {/* <p className='spacetxt'>DECEMBER 20, 2019 . BY JOHN DOE . PLANNING</p> */}
                        <div className="row">
                            <div className="col-sm-3">
                                <p style={{ color: "gray" }}>DECEMBER 20, 2019 </p>
                            </div>

                            <div className="col-sm-2 midcol2">
                                <p style={{ color: "gray" }}>BY JOHN DOE</p>
                            </div>

                            <div className="col-sm-2">
                                <p style={{ color: "gray" }}>PLANNING</p>
                            </div>
                        </div>
                        <h1 className='targetamazon'>Target and Amazon Shopping List for Home Stagers</h1>
                        <img src={imgblog1} alt="imgblog1" className='imgblog1' />
                        <div className="endtext">
                            <p style={{ color: "gray" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <Link to={'/blog'} style={{ textDecoration: "none", color: "black" }}> <h6>____ Read More</h6> </Link>
                        </div>
                        <div className="container-fluid orangecon">
                            <h4>“Without question this is the stager you want to use! Jennifer staged a hard to sell home for me and we sold it fast! …. Jennifer made it possible.”</h4>
                            <h5 className='martinlock'>Martin Lockhart</h5>
                            <i class="fa-solid fa-quote-left leftquoteicon"></i>
                        </div>
                        <div className="row row2n">
                            <div className="col-sm-3">
                                <p style={{ color: "gray" }}>DECEMBER 20, 2019 </p>
                            </div>

                            <div className="col-sm-2 midcol2">
                                <p style={{ color: "gray" }}>BY JOHN DOE</p>
                            </div>

                            <div className="col-sm-2">
                                <p style={{ color: "gray" }}>PLANNING</p>
                            </div>
                        </div>
                        <h1 className='ideasforteam'>6 Ideas for Team Building & Employee Appreciation for Home Stagers</h1>
                        <img src={imgblog2} alt="imgblog2" className='imgblog2' />
                        <div className="endtext">
                            <p style={{ color: "gray" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <Link to={'/blog'} style={{ textDecoration: "none", color: "black" }}> <h6>____ Read More</h6> </Link>
                        </div>

                        <hr className='hrlinegray' />

                        <div className="row row2n">
                            <div className="col-sm-3">
                                <p style={{ color: "gray" }}>DECEMBER 20, 2019 </p>
                            </div>

                            <div className="col-sm-2 midcol2">
                                <p style={{ color: "gray" }}>BY JOHN DOE</p>
                            </div>

                            <div className="col-sm-2">
                                <p style={{ color: "gray" }}>PLANNING</p>
                            </div>
                        </div>
                        <h1 className='ideasforteam'>How to Find the Best Price Structure for Your Home Staging Services</h1>
                        <img src={imgblog2} alt="imgblog2" className='imgblog2' />
                        <div className="endtext">
                            <p style={{ color: "gray" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <Link to={'/blog'} style={{ textDecoration: "none", color: "black" }}> <h6>____ Read More</h6> </Link>
                        </div>
                        <hr className='hrlinegray' />
                    </div>
                    <div className="col-sm-4 maincol2">
                        <div className="div2for2ndcol">
                            <img src={imgcol2} alt="imgcol2" className='imgcol2b' />
                            <p className='textbtw'>Quis ipsum suspendisse ultrices gravid. Risus commodo viverra maece accums lacus vel facilisis.</p>
                            <img src={imgsign} alt="imgsign" className='imgsign' />
                        </div>
                        {/* <input type="email" id="email" name="email" placeholder="Your email..." />
                        <a href="index.html" style={{ textDecoration: "none" }}><i className="fa-solid fa-arrow-pointer" /> */}
                        <input type="text" name="search" id="search" placeholder="Search..." />
                        <Link to={'/blog'} style={{ textDecoration: "none" }}><i class="fa-solid fa-magnifying-glass"></i></Link>

                        <h5 className='ctgsh5'>CATEGORIES</h5>
                        <p style={{ color: "gray" }}>Work Space</p>
                        <p style={{ color: "gray" }}>Office Building</p>
                        <p style={{ color: "gray" }}>HomeStay</p>
                        <p style={{ color: "gray" }}>Making</p>
                        <p style={{ color: "gray" }}>Process</p>

                        <h5 className='fnwsh5'>FEATURE NEWS</h5>

                        <div className="row frstrowend">
                            <div className="col-sm-3">
                            <img src={imgblr} alt="imgblr" />
                            </div>
                            <div className="col-sm-9">
                              <h6 className='firstxtdec'>December 20, 2019</h6>
                              <h6 className='gracemillane'>Grace Millane's mother tells killer she died 'terrified</h6> 
                            </div>
                        </div>

                        <div className="row scndrowend">
                            <div className="col-sm-3">
                            <img src={imgblr2} alt="imgblr2" />
                            </div>
                            <div className="col-sm-9">
                              <h6 className='firstxtdec'>December 20, 2019</h6>
                              <h6 className='gracemillane'> A 'gregarious' gap-year student who dreamed.</h6> 
                            </div>
                        </div>

                        <div className="row thrdrowend">
                            <div className="col-sm-3">
                            <img src={imgblr3} alt="imgblr3" />
                            </div>
                            <div className="col-sm-9">
                              <h6 className='firstxtdec'>December 20, 2019</h6>
                              <h6 className='gracemillane'> A 'gregarious' gap-year student who dreamed.</h6> 
                            </div>
                        </div>

                        <h5 className='tagsh5'>TAG</h5>
                        <div className="row aftertag">
                            <div className="col-sm-3 clmn1b">
                            <Link to={'/blog'} style={{textDecoration:"none"}}><h6 className='colorslink'>BRANDING</h6></Link>
                            </div>
                            <div className="col-sm-3 clmnb1">
                            <Link to={'/blog'} style={{textDecoration:"none"}}><h6 className='colorslink'>OFFICE</h6></Link>
                            </div>
                            <div className="col-sm-3 clmnb2">
                            <Link to={'/blog'} style={{textDecoration:"none"}}><h6 className='colorslink'>CREATIVE</h6></Link>
                            </div>
                            <div className="col-sm-3 clmnb3">
                            <Link to={'/blog'} style={{textDecoration:"none"}}><h6 className='colorslink'>BUILDING</h6></Link>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-3 clmn1b4">
                            <Link to={'/blog'} style={{textDecoration:"none"}}><h6 className='colorslink'>PORTFOLIO</h6></Link>
                            </div>
                            <div className="col-sm-3 clmnb5">
                            <Link to={'/blog'} style={{textDecoration:"none"}}><h6 className='colorslink'>PRODUCTS</h6></Link>
                            </div>
                            <div className="col-sm-3 clmnb6">
                            <Link to={'/blog'} style={{textDecoration:"none"}}><h6 className='colorslink'>WEBSITE</h6></Link>
                            </div>
                            <div className="col-sm-3 clmnb7">
                            <Link to={'/blog'} style={{textDecoration:"none"}}><h6 className='colorslink'>DESIGN</h6></Link>
                            </div>
                        </div>
                        {/* <Link to={'/blog'} style={{textDecoration:"none"}}><h6 className='hoverontxt' >Branding</h6><h6 className='hoverontxt' >Branding</h6></Link> */}
                        <Link to={'/blog'} style={{textDecoration:"none"}}><h6 className='clmnb8'>WORKING SPACE</h6></Link>
                        
                        <h5 className='followush5'>FOLLOW US</h5>
                        <div className="row iconsnewblogr">
                            <div className="col-sm-2">
                            <i class="fa-brands fa-facebook-f newblogf"></i>
                            </div>
                            <div className="col-sm-2 twittercolumn">
                            <i class="fa-brands fa-twitter newblogt"></i>
                            </div>
                            <div className="col-sm-2 twittercolumn">
                            <i class="fa-brands fa-instagram newblogins"></i>
                            </div>
                            <div className="col-sm-2 twittercolumn">
                            <i class="fa-brands fa-linkedin-in newbloglink"></i>
                            </div>
                        </div>

                        <h5 className='newsletterh5'>NEWS LETTER</h5>

                        <input type="email" name="email" placeholder="Your Email Address..." id='emailid' />
                        <Link to={'/blog'} style={{ textDecoration: "none" }}><i class="fa-solid fa-arrow-pointer newblogarrow"></i></Link>
                    </div>
                </div>
            </div>
            <nav aria-label="Page navigation example ">
                <ul className="pagination paginationdiv">
                    <li className="page-item">
                        <Link className="page-link itmsn" to={'/blog'} aria-label="Previous">
                            {/* <span aria-hidden="true"><b>&laquo;</b></span> */}
                            <i class="fa-solid fa-angles-left itmsnin"></i>
                        </Link>
                    </li>
                    <li className="page-item"><Link className="page-link itmsn" to={'/blog'}> <b>1</b></Link></li>
                    <li className="page-item"><Link className="page-link itmsn" to={'/blog'}><b>2</b></Link></li>
                    <li className="page-item"><Link className="page-link itmsn" to={'/blog'}><b>3</b></Link></li>
                    <li className="page-item">
                        <Link className="page-link itmsn" to={'/blog'} aria-label="Next">
                            {/* <span aria-hidden="true"><b>&raquo;</b></span> */}
                            <i class="fa-solid fa-angles-right itmsnin"></i>
                        </Link>
                    </li>
                </ul>
            </nav>

            <Footer />
        </>
    )
}

export default Blog