import React from 'react'
import testimage from "../Images/ek or.png"
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <img className="ser" src= {testimage} alt="logo"/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown"
            style={{justifyContent: "center", fontSize: "20px"}}>
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link mx-3 active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle mx-3" to="admissions" id="navbarDropdownMenuLink"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Admissions
                        </Link>
                    <ul className="dropdown-menu bg-light" aria-labelledby="navbarDropdownMenuLink"
                        style={{marginTop: "17px" , borderRadius: "8px"}}>
                            <li><Link className="dropdown-item" to="/admissions">Admission Policy </Link></li>
                            <li><Link className="dropdown-item" to="/fee_structure">Fee Structure</Link></li>
                            <li><Link className="dropdown-item" to="/parent_tech2">Parent Teaching (PTM)</Link></li>
                            <li><Link className="dropdown-item" to="/registration">Apply Online </Link></li>
                    </ul>
                </li>
                <li className="nav-item">
                <Link className="nav-link mx-3" to="/faculty">Faculty</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link mx-3" to="/director">Director Message</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mx-3" to="/gallery">Gallery</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mx-3" to="/contact">Contact us</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
    </>
  )
}
