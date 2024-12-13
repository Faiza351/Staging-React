import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    const [isActive, setIsActive] = useState("h");

    console.log(isActive)

    return (
        <>
            <nav className="navbar navbar-expand-lg topnavcf1">
                <div className="container-fluid cfnavbar">
                    <Link className="navbar-brand" to={'/'}><h1 style={{ color: "white" }}>Staging<mark style={{ color: "#F28C28", backgroundColor: "transparent", marginLeft: "-3%" }}>.</mark></h1></Link>
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navmidpart" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" >
                                <Link className={isActive === "h" ? "nav-link homeit1 text-white active" : "nav-link text-white"} aria-current="page" to={'/'} onClick={() => setIsActive("h")}>Home</Link>
                            </li>
                            <li className="nav-item"  >
                                <Link className={isActive === "p" ? "nav-link homeit1 text-white active" : "nav-link item1"} to={'/project'} onClick={() => setIsActive("p")}>Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={isActive === "a" ? "nav-link homeit1 text-white active" : "nav-link item1"} to={'/about'} onClick={() => setIsActive("a")}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={isActive === "pg" ? "nav-link homeit1 text-white active" : "nav-link item1"} to={'/about'} onClick={() => setIsActive("pg")} >Pages</Link>
                                {/* <ul className="dropdown-menu">
                                    <li><a className="dropdown-item text-black" href="#">Action</a></li>
                                    <li><a className="dropdown-item text-black" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider text-black" /></li>
                                    <li><a className="dropdown-item text-black" href="#">Something else here</a></li>
                                </ul> */}
                            </li>
                            <li className="nav-item">
                                <Link className={isActive === "b" ? "nav-link homeit1 text-white active" : "nav-link item1"} to={'/blog'} onClick={() => setIsActive("b")}>Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={isActive === "c" ? "nav-link homeit1 text-white active" : "nav-link item1"} to={'/contact'} onClick={() => setIsActive("c")}>Contact</Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                           <h5>form</h5>
                        </form> */}
                        <div className="nav3part">
                            <h6>Call us for any questions</h6>
                            <p style={{ fontSize: "18px", color: "#F28C28" }}>+01 123 456 789</p>

                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar