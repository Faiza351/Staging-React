import React from 'react'
import '../Projects.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import imgrow1 from '../assets/images/project-p1.jpg'
import imgrow2 from '../assets/images/project-1.jpg'
import imgrow3 from '../assets/images/project-p4.jpg'
import imgrow4 from '../assets/images/about-pic.jpg'
import imgrow41 from '../assets/images/project-3.jpg'
import Footer from '../components/Footer.jsx'


function Projects() {
  return (
    <>
      <div className="container-fluid projectcfpro">
        <Navbar />
        <h1 className='projecthead'>OUR PROJECTS</h1>
        <div className="centertexth">
          <Link className='h5home' to={'/'}><h5>Home</h5></Link>
          <h5 className='h5projects'>~ Projects</h5>
        </div>

      </div>

      <div className="container projectcon">


        {/* first row */}
        <div className="row">
          <div className="col-sm-6">
            <img src={imgrow1} alt="imgr1" className='imgr1' />
            <h4 className='obh4'>OFFICE BUILDING</h4>
          </div>
          <div className="col-sm-6 col2new">
            <img src={imgrow2} alt="imgr2" className='imgr2' />
            <h4 className='obh4'>FURNITURE DECORATIVE</h4>
          </div>
        </div>

        {/* 2nd row */}
        <div className="row projectrow1">
          <div className="col-sm-6 projectcol1">
            <img src={imgrow2} alt="imgr2" className='imgr3' />
            <h4 className='obh4'>OFFICE BUILDING</h4>
          </div>
          <div className="col-sm-6 projectcol2">
            <img src={imgrow3} alt="imgr3" className='imgr4' />
            <h4 className='obh4'>FURNITURE DECORATIVE</h4>
          </div>
        </div>

        {/* 3rd row */}
        <div className="row">
          <div className="col-sm-6 projectcol3">
            <img src={imgrow4} alt="imgr4" className='imgr5' />
            <h4 className='obh4'>OFFICE BUILDING</h4>
          </div>
          <div className="col-sm-6 projectcol4">
            <img src={imgrow41} alt="imgr41" className='imgr6' />
            <h4 className='obh4'>FURNITURE DECORATIVE</h4>
          </div>
        </div>


      </div>

      <Footer />
    </>
  )
}

export default Projects