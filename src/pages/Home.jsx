import { useState } from 'react'
import React from 'react'
import Navbar from '../components/Navbar'
import img1 from '../assets/images/about-pic.jpg'
import imgs1 from '../assets/images/services-1.png'
import imgs2 from '../assets/images/services-2.png'
import imgs3 from '../assets/images/services-3.png'
import imgs4 from '../assets/images/services-4.png'
import Testimonials from '../components/Testimonials'
import imglatest1 from '../assets/images/latest-1.jpg'
import imglatest2 from '../assets/images/latest-2.jpg'
import imglatest3 from '../assets/images/latest-3.jpg'
import AboutComponent from '../components/AboutComponent'
import ContactComponent from '../components/ContactComponent'
import Footer from '../components/Footer'

function Home() {
  const [sliderValue, setSliderValue] = useState(20);
  const handleSliderValue = (e) => {
    setSliderValue(e.target.value);
  };

  return (
    <>
      {/* header section */}
      <div className="container-fluid cfheader">
        <Navbar />
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <div className="cardiv">
                <h1 className='h1header'>QUALITY IS NOT ONLY OUR STANDARD.</h1>
                <button type='button' className='btn btnsp'>See Project</button>
              </div>

            </div>
            <div className="carousel-item" data-bs-interval="2000">

              <div className="cardiv">
                <h1 className='h1header'>QUALITY IS NOT ONLY OUR STANDARD.</h1>
                <button type='button' className='btn btnsp'>See Project</button>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev prevbtn1" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon previc" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next nxtbtn1" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon nxtic" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="row headrow1">
          <div className="col-sm-3 text-white" style={{ paddingTop: "2px" }}>
            01 <input type="range" id='counterinput' min={0} max={100} value={sliderValue} onChange={handleSliderValue} className='accent' /> 02
            {/* <div >{sliderValue}</div> */}
          </div>
          <div className="col-sm-5 headrow1col2">
            <p>Discover</p>
          </div>
          <div className="col-sm-3 tcol ">
            <div className="row">
              <div className="col-sm-2">
                <i className="fa-brands fa-facebook-f fbicon"></i>
              </div>
              <div className="col-sm-2">
                <i className="fa-brands fa-twitter twicon"></i>
              </div>
              <div className="col-sm-2">
                <i className="fa-brands fa-instagram insicon"></i>
              </div>
              <div className="col-sm-2">
                <i className="fa-brands fa-linkedin-in linkicon"></i>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 2nd 2 cols */}
      <div className="container containersecol">
        <div className="row">
          <div className="col-sm-6 secol1">
            <h6 style={{ color: "#F28C28" }}>WHO ARE WE</h6>
            <h1 className='h1secol1'>We propose and discuss design rules</h1> <br />
            <p style={{ color: "gray" }}>Metasurfaces are generally designed by placing scatterers in periodic or pseudo-periodic grids. We propose and discuss design rules for functional metasurfaces with randomly placed.</p>
            <p style={{ color: "gray" }}>Anisotropic elements that randomly sample. Quisque sit amet nisl ante. Fusce lacinia non tellus id gravida. Cras neque dolor, volutpat et hendrerit et.</p>
            <button type='button' className='btn secolbtn'><b>Learn More</b></button>
          </div>
          <div className="col-sm-5 secol2">

            <img src={img1} alt="img1" className='img1' />
          </div>
        </div>
      </div>

      {/* latest projects */}
      <div className="container-fluid cflatestprojects">
        <h5 style={{ textAlign: "center", color: "#F28C28" }}>Our Works</h5>
        <h1 style={{ textAlign: "center" }}>Latest Projects</h1>

        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row row1latestproject">
                <div className="col-sm-3">
                  <div className="card card1">
                    {/* <img src={imgp1} class="d-block w-100" alt="imgp1" /> */}
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card card2">
                    {/* <img src={imgp1} class="d-block w-100" alt="imgp1" /> */}
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card card3">
                    {/* <img src={imgp1} class="d-block w-100" alt="imgp1" /> */}
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card card4">
                    {/* <img src={imgp1} class="d-block w-100" alt="imgp1" /> */}
                  </div>
                </div>
              </div>

            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-sm-3">
                  <div className="card card5">
                    {/* <img src={imgp1} class="d-block w-100" alt="imgp1" /> */}
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card card6">
                    {/* <img src={imgp1} class="d-block w-100" alt="imgp1" /> */}
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card card7">
                    {/* <img src={imgp1} class="d-block w-100" alt="imgp1" /> */}
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card card8">
                    {/* <img src={imgp1} class="d-block w-100" alt="imgp1" /> */}
                  </div>
                </div>
              </div>

            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-sm-3">
                  <div className="card card9">
                    {/* <img src={imgp1} class="d-block w-100" alt="imgp1" /> */}
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card card10">
                    {/* <img src={imgp1} class="d-block w-100" alt="imgp1" /> */}
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card card11">
                    {/* <img src={imgp1} class="d-block w-100" alt="imgp1" /> */}
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card card12">
                    {/* <img src={imgp1} class="d-block w-100" alt="imgp1" /> */}
                  </div>
                </div>
              </div>

            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon piconlp" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon niconlp" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* 3rd section our specialization */}
      <div className="container ourspecontainer">
        <h6 style={{ color: "#F28C28" }}>OUR SPECIALIZATION</h6>
        <h1>WHAT WE DO</h1>
        <div className="row">
          <div className="col-sm-3 fcolserv">
            <img src={imgs1} alt="imgs1" /> <br /> <br />
            <h3>INTERIOR DESIGN</h3>
            <p style={{ color: "gray" }}>As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.</p>
          </div>
          <div className="col-sm-3 scolserv">
            <img src={imgs2} alt="imgs2" /> <br /> <br />
            <h3>Office Design</h3>
            <p style={{ color: "gray" }}>Our commitment to exceptional quality has never wavered. To day ranks as one of the most highly-regarded construction.</p>
          </div>
          <div className="col-sm-3 tcolserv">
            <img src={imgs3} alt="imgs3" />  <br /> <br />
            <h3>Home Design</h3>
            <p style={{ color: "gray" }}>Interdisciplinary architectural studio with cultural, residential and commercial projects built worldwide.</p>
          </div>
          <div className="col-sm-3 fthcolserv">
            <img src={imgs4} alt="imgs4" />  <br /> <br />
            <h3>Design drawing</h3>
            <p style={{ color: "gray" }}>Creating architectural and creative solutions to help people realize their vision and make them a reality.</p>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-sm-3 fcol1">
            <div className="row">
              <div className="col-sm-4">
                <h1 style={{ fontSize: "60px", color: "#F28C28" }}>85</h1>
              </div>
              <div className="col-sm-2 innercol1">
                <h5>PROJECTS COMPLETED</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-3 scol2">
            <div className="row">
              <div className="col-sm-5">
                <h1 style={{ fontSize: "60px", color: "#F28C28" }}>127</h1>
              </div>
              <div className="col-sm-2 innercol1">
                <h5>HAPPY CLIENTS</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-3 tcol3">
            <div className="row">
              <div className="col-sm-4">
                <h1 style={{ fontSize: "60px", color: "#F28C28" }}>36</h1>
              </div>
              <div className="col-sm-2 innercol1">
                <h5>AWARDS RECEIVED</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-3 fthcol4">
            <div className="row">
              <div className="col-sm-4">
                <h1 style={{ fontSize: "60px", color: "#F28C28" }}>74</h1>
              </div>
              <div className="col-sm-5 innercol1">
                <h5>CUPS OF COFFEE</h5>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Testimonials />
      <AboutComponent />
      <ContactComponent />


      <div className="container fromblogcontain">
        <h6 className='latestnewsh5'>LATEST NEWS</h6>
        <h1 className='fromblogh1'>FROM OUR BLOG</h1>
        <button type='button' className='fromourblogbtn'> <b>View All</b></button>
        <div className="row fromblogrow">
          <div className="col-sm-4 col1fromblog">
          {/* style="width: 18rem;" */}
            <div className="card fromblogcard">
              <img src={imglatest1} className="imgfromb1" alt="imglat1" />
              <div className="card-body">
                <h6 className="card-title" style={{color:"gray"}}>ARCHITECTURE</h6>
                <h4 className="card-text">Target and Amazon Shopping List for Home Stagers</h4>
                <div className="replacetxt">
                  <p className='slashleft'>_____</p>
                  <h6 className='textright'><b>Read More</b></h6>
                </div>

              </div>
            </div>
          </div>
          <div className="col-sm-4 col2fromblog">
          {/* style="width: 18rem;" */}
          <div className="card fromblogcard2">
              <img src={imglatest1} className="imgfromb1" alt="imglat1" />
              <div className="card-body">
                <h6 className="card-title" style={{color:"gray"}}>INTERIOR</h6>
                <h4 className="card-text">6 Ideas for Team Building and Employee Appreciation for Home Stagers</h4>
                <div className="replacetxt">
                  <p className='slashleft'>_____</p>
                  <h6 className='textright'><b>Read More</b></h6>
                </div>
              </div>
            </div>

          </div>
          <div className="col-sm-4 col3fromblog">
          {/* style={{"width: 18rem;"}} */}
          <div className="card fromblogcard ">
              <img src={imglatest1} className="imgfromb1" alt="imglat1" />
              <div className="card-body">
                <h6 className="card-title" style={{color:"gray"}}>PLANNING</h6>
                <h4 className="card-text">How to Find the Best Price Structure for Your Home Staging Services</h4>
                <div className="replacetxt">
                  <p className='slashleft'>_____</p>
                  <h6 className='textright'><b>Read More</b></h6>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default Home