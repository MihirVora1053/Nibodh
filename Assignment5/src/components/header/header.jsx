import React from 'react'

export default function header() {
    return (
        <div className="row justify-content-between customHeader">
            <div className="col-md-5 d-flex">
                <div className="icons">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-pinterest-square"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-linkedin-in"></i>                
                </div>
                <div className="contact mx-5">
                    <i className="fas fa-phone-alt"></i>
                    &nbsp;<span>+91-1234-4432</span>
                </div>
            </div>
            <div className="col-md-5 d-flex justify-content-end">
                <div className="links">
                    <a href="/"><i class="fas fa-user"></i>&nbsp;SIGNUP</a>
                    <a href="/"><i class="fas fa-lock"></i>&nbsp;LOGIN</a>
                </div>
            </div>
        </div>
    )
}
