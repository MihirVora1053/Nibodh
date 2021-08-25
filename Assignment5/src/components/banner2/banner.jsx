import React from 'react'

export default function banner() {
    return (
        <div className="banner2">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-6">
                    <div className="display-4 banner2Content">
                        We help for 25 years to helpless plants and trees and we're happy!
                    </div>
                    <div className="volBtn">
                        <button className="btn btn-outline-danger">
                            Become a Volunteer
                        </button>
                    </div>
                </div>
                <div className="col-6">
                    <div className="iconsLogo d-flex">
                        <div className="icon-1">
                            <i class="fas fa-trophy"></i>
                            <div className="Awards">
                                <p>43 Awards</p>
                            </div>
                        </div>
                        
                        <div className="icon-2">
                            <i class="fas fa-user-friends"></i>
                            <div className="Users">
                                <p>4000+ Volunteers</p>
                            </div>
                        </div>
                        <div className="icon-3">
                            <i class="fas fa-layer-group"></i>
                            <div className="Awards">
                                <p>1000+ Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}
