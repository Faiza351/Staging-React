import React from 'react'
import '../About.css'
import Navbar from '../components/Navbar'
import ContactComponent from '../components/ContactComponent'
import AboutComponent from '../components/AboutComponent'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import img1col2 from '../assets/images/services-5.png'
import img2col2 from '../assets/images/services-6.png'


function AboutUs() {
    return (
        <>
            <div className="container-fluid aboutcf">
                <Navbar />
                <h1 className='abouthead'>OUR PROJECTS</h1>
                <div className="centertexthabout">
                    <Link className='h5homeabout' to={'/'}><h5>Home</h5></Link>
                    <h5 className='h5about'>~ About</h5>
                </div>
            </div>
            <div className="container aboutcon">
                <div className="row">
                    <div className="col-sm-4">
                        <h5 style={{ color: "#F28C28" }}>WHO ARE WE</h5>
                        <h1 style={{ color: "black" }}>ABOUT US</h1>
                        <p className='textcol1'>As you might expect of a company that began as a high-end interiors contractor.</p>
                    </div>
                    <div className="col-sm-8 column9about">
                        <p style={{ color: "grey" }}>Metasurfaces are generally designed by placing scatterers in periodic or pseudo-periodic grids. We propose and discuss design rules for functional metasurfaces with randomly placed. Anisotropic elements that randomly sample. Quisque sit amet nisl ante.</p>
                        <div className="row row1col2">
                        <div className="col-sm-6">
                            <img src={img1col2} alt="img1col2" className='image1' />
                            <h4 className='ourmission'>OUR MISSION</h4>
                            <p className='textom'>As you might expect of a company that began as a high-end interiors contractor, we pay strict attention. Anisotropic elements that randomly sample.</p>

                        </div>
                        <div className="col-sm-6 columnlst">
                        <img src={img2col2} alt="img2col2" className='image2' />
                        <h4 className='ourmission'>OUR VISION</h4>
                        <p className='textom'>Our commitment to exceptional quality has never wavered. To day ranks as one of the most highly-regarded construction. Anisotropic elements that randomly sample.</p>
                        </div>
                    </div>
                    </div>
                </div>

            </div>

            <ContactComponent />
            <AboutComponent />

            <Footer />

        </>
    )
}

export default AboutUs