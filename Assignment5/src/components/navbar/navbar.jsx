import React from 'react'
import logo from '../images/logo.jpg'
export default function navbar() {
    return (
        <div className="row customNav">
            <div className="col-2">
                <img className="img-fluid logo-custom" src={logo} alt="" />
            </div>
            <div className="col-8">
                <ul class="nav justify-content-center h-100 align-items-center customUL">
                    
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Service</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Donations</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Events</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Resources</a>
                    </li>
                </ul>
            </div>
            <div className="col-2 d-flex justify-content-end align-items-center">
                <div className="buttonDonate">
                    <button className="btn btn-success">DONATE US</button>
                </div>
            </div>
        </div>
    )
}
