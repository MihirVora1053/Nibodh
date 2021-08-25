import React from 'react';
import logo from '../images/logo.jpg';
export default function footer() {
    return (
        <div className="row justify-content-evenly mt-4 py-4">
            <div className="col-8 foot">
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
            <div className="row justify-content-evenly">
                <div className="col-2 mt-5 mx-5 px-5">
                    <img className="img-fluid footImg" src={logo} alt="" />
                    <p className="logot text-uppercase">Trees World</p>
                    <div className="">
                        <h6>About Us</h6>
                        <p style={{fontSize:"12px"}}>
                            Your text goes here. this is just placeholder content.Your text goes here. this is just placeholder content.
                        </p>
                    </div> 
                </div>
                <div className="col-4 mt">
                    
                    <div className="row">
                        <div className="col-6">
                            <div style={{marginLeft:"70px"}}>
                            <h6>COMPANY</h6>
                            <ul style={{listStyle:"none",fontSize:"14px",padding:"0"}}>
                                <li>Home</li>
                                <li>About</li>
                                <li>Service</li>
                                <li>Contact Us</li>
                            </ul>
                            </div>
                            
                        </div>
                        <div className="col-6">
                        <ul style={{listStyle:"none",fontSize:"14px",padding:"0",marginTop:"20px"}}>
                                <li>Donations</li>
                                <li>Events</li>
                                <li>Resources</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-4 mt">
                    <div className="row">
                        <div className="col-5">
                            <h6>OPENING HOURS</h6>
                            <div><i className="fas fa-phone-alt"></i> &nbsp;+91-1234-4432</div>
                            <div><i className="fas fa-envelope"></i> &nbsp;mihir625y@gmail.com</div>
                        </div>
                        <div className="col-6">
                            <h6 style={{letterSpacing:"4px"}}>
                                FOLLOW US
                            </h6>
                            <div className="icons" style={{paddingLeft:"20px"}}>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-pinterest-square"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-linkedin-in"></i>                
                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
