import React from 'react'
import imgl1 from '../assets/images/logo-1.png'
import imgl2 from '../assets/images/logo-2.png'
import imgl3 from '../assets/images/logo-3.png'
import imgl4 from '../assets/images/logo-4.png'
import imgl5 from '../assets/images/logo-5.png'


function Testimonials() {
    return (
        <>
            <div className="container-fluid cftestimonial">
                <h6 style={{ textAlign: "center", color: "#F28C28" }}>TESTIMONIALS</h6>
                <h1 style={{ textAlign: "center" }}>WHAT YOUR CLIENTS SAY</h1>
                <div className="container cfinnertest bg-white">
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators thumbdiv">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active firsroundtbtn" aria-current="true" aria-label="Slide 1">

                            </button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className='secroundbtn'>

                            </button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className='thirdroundbtn'>

                            </button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4" className='fthroundbtn'>

                            </button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5" className='fifroundbtn'>

                            </button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="centext">
                                    <p>"1. Fast and accurate at solving mental math problems involving
                                        addition, subtraction, multiplication, division and percentages
                                        but without high-level skill that might be required in jobs requiring
                                        complex calculation and analysis."
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="centext">
                                    <p>"2. Fast and accurate at solving mental math problems involving
                                        addition, subtraction, multiplication, division and percentages
                                        but without high-level skill that might be required in jobs requiring
                                        complex calculation and analysis."
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="centext">
                                    <p>"3. Fast and accurate at solving mental math problems involving
                                        addition, subtraction, multiplication, division and percentages
                                        but without high-level skill that might be required in jobs requiring
                                        complex calculation and analysis."
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="centext">
                                    <p>"4. Fast and accurate at solving mental math problems involving
                                        addition, subtraction, multiplication, division and percentages
                                        but without high-level skill that might be required in jobs requiring
                                        complex calculation and analysis."
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="centext">
                                    <p>"5. Fast and accurate at solving mental math problems involving
                                        addition, subtraction, multiplication, division and percentages
                                        but without high-level skill that might be required in jobs requiring
                                        complex calculation and analysis."
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon previousicon12" aria-hidden="true"><i className="fa-solid fa-angle-left lefticon12"></i></span>

                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon nexticon12" aria-hidden="true"><i className="fa-solid fa-angle-right righticon12"></i></span>

                        </button>
                    </div>
                </div>
                <h6 className='rch6'> <b> Renee Calhoun</b></h6>
                <p className='rcp1'> <b> CEO Wooley</b></p>

                <div className="container-fluid imagescarousel1">
                    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                        <div className="carousel-inner">
                            <div className="carousel-item active">

                                <div className="row">
                                    <div className="col-sm-2">
                                        <div className="newcard newcard1">
                                            {/* <img src={imgl1} className="d-block w-100" alt="imgl1" /> */}
                                        </div>

                                    </div>
                                    <div className="col-sm-2">
                                        <div className="newcard newcard2">
                                            {/* <img src={imgl2} className="d-block w-100" alt="imgl2" /> */}
                                        </div>

                                    </div>
                                    <div className="col-sm-2">
                                        <div className="newcard newcard3">
                                            {/* <img src={imgl3} className="d-block w-100" alt="imgl3" /> */}
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="newcard newcard4">
                                            {/* <img src={imgl4} className="d-block w-100" alt="imgl4" /> */}
                                        </div>

                                    </div>
                                    <div className="col-sm-2">
                                        <div className="newcard newcard5">
                                            {/* <img src={imgl5} className="d-block w-100" alt="imgl5" /> */}
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item">

                                <div className="row">
                                    <div className="col-sm-2">
                                        <div className="newcard newcard6">
                                            {/* <img src={imgl1} className="d-block w-100" alt="imgl1" /> */}
                                        </div>

                                    </div>
                                    <div className="col-sm-2">
                                        <div className="newcard newcard7">
                                            {/* <img src={imgl2} className="d-block w-100" alt="imgl2" /> */}
                                        </div>

                                    </div>
                                    <div className="col-sm-2">
                                        <div className="newcard newcard8">
                                            {/* <img src={imgl3} className="d-block w-100" alt="imgl3" /> */}
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="newcard newcard9">
                                            {/* <img src={imgl4} className="d-block w-100" alt="imgl4" /> */}
                                        </div>

                                    </div>
                                    <div className="col-sm-2">
                                        <div className="newcard newcard10">
                                            {/* <img src={imgl5} className="d-block w-100" alt="imgl5" /> */}
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item">

                                <div className="row">
                                    <div className="col-sm-2">
                                        <div className="newcard newcard11">
                                            {/* <img src={imgl1} className="d-block w-100" alt="imgl1" /> */}
                                        </div>

                                    </div>
                                    <div className="col-sm-2">
                                        <div className="newcard newcard12">
                                            {/* <img src={imgl2} className="d-block w-100" alt="imgl2" /> */}
                                        </div>

                                    </div>
                                    <div className="col-sm-2">
                                        <div className="newcard newcard13">
                                            {/* <img src={imgl3} className="d-block w-100" alt="imgl3" /> */}
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="newcard newcard14">
                                            {/* <img src={imgl4} className="d-block w-100" alt="imgl4" /> */}
                                        </div>

                                    </div>
                                    <div className="col-sm-2">
                                        <div className="newcard newcard15">
                                            {/* <img src={imgl5} className="d-block w-100" alt="imgl5" /> */}
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                            {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                            {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Testimonials