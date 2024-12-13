import React from 'react'
import imgteam1 from '../assets/images/team-1.jpg'
import imgteam2 from '../assets/images/team-2.jpg'
import imgteam3 from '../assets/images/team-3.jpg'

function AboutComponent() {
  return (
    <>
      <div className="container aboutuscontainer">
        <h5 className='ourteamh6'>OUR TEAM</h5>
        <h1 className='meeteamh1'>MEET OUR TEAM</h1>
        <button type='button' className='newbutton'> <b>Learn More</b></button>
        <div className="row aboutusrown">
          <div className="col-sm-4 aboutuscol1">
            <img src={imgteam1} alt="imgteam1" className='imgteam1' />
            <div className="textonimage">
              <h5 style={{ color: "white" }}>Dolores Webster</h5>
              <h6 style={{ color: "#F28C28" }}>CEO & Founder</h6>
            </div>
            <div className="middle">
              <h5 style={{ color: "black" }}>Dolores Webster</h5>
              <h6 style={{ color: "#F28C28" }}>CEO & Founder</h6>
              <hr />
              <p>Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies consectetur. Ut viverra porta leo, non tincidunt mauris condimentum eget. Vivamus non turpis elit. Aenean ultricies nisl sit amet.</p>
              <i class="fa-brands fa-facebook-f aboutusfaceicon"></i><i class="fa-brands fa-twitter aboutustwicon"></i><i class="fa-brands fa-instagram aboutusinsicon"></i>
            </div>
          </div>
          <div className="col-sm-4 aboutuscol2">
            <img src={imgteam2} alt="imgteam2" className='imgteam2' />
            <div className="textonimage">
              <h5 style={{ color: "white" }}>Dana Vaughn</h5>
              <h6 style={{ color: "#F28C28" }}>Architect</h6>
            </div>
            <div className="middle">
              <h5 style={{ color: "black" }}>Dolores Webster</h5>
              <h6 style={{ color: "#F28C28" }}>CEO & Founder</h6>
              <hr />
              <p>Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies consectetur. Ut viverra porta leo, non tincidunt mauris condimentum eget. Vivamus non turpis elit. Aenean ultricies nisl sit amet.</p>
              <i class="fa-brands fa-facebook-f aboutusfaceicon"></i><i class="fa-brands fa-twitter aboutustwicon"></i><i class="fa-brands fa-instagram aboutusinsicon"></i>
            </div>
          </div>
          <div className="col-sm-4 aboutuscol3">
            <img src={imgteam3} alt="imgteam3" className='imgteam3' />
            <div className="textonimage">
              <h5 style={{ color: "white" }}>Jonathan Mcdaniel</h5>
              <h6 style={{ color: "#F28C28" }}>Architect</h6>
            </div>
            <div className="middle">
              <h5 style={{ color: "black" }}>Dolores Webster</h5>
              <h6 style={{ color: "#F28C28" }}>CEO & Founder</h6>
              <hr />
              <p>Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies consectetur. Ut viverra porta leo, non tincidunt mauris condimentum eget. Vivamus non turpis elit. Aenean ultricies nisl sit amet.</p>
              <i class="fa-brands fa-facebook-f aboutusfaceicon"></i><i class="fa-brands fa-twitter aboutustwicon"></i><i class="fa-brands fa-instagram aboutusinsicon"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutComponent
