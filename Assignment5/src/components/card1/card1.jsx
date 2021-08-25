import React from 'react'
import logo from '../images/logo.jpg';
export default function card1() {
    return (
        <div>
            <div className="secondDiv d-flex justify-content-center mt-4">
                <img class="secondLogo img-fluid" src={logo} alt="" />
            </div>
            <div className="cardHeading">
                <h1 className="display-6 text-center"><span className="supNum">321,786</span> number of supporters worldwide</h1>
                <div className="d-flex justify-content-center">
                    <span className="hr"></span>
                </div>
            </div>
            <div className="row justify-content-center my-5">
                <div className="col-4 p-0">
                    <img className="img-fluid" src="https://i.pinimg.com/originals/64/d8/94/64d8942cf6f5e9fb00b6a974dac716a8.jpg" alt="" />
                </div>
                <div className="col-4 mission">
                    <h1 className="text-center mt-5">Our Mission</h1>
                    <div className="d-flex justify-content-center">
                        <span className="hrm"></span>
                    </div>
                    <div className="cardContent">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta quibusdam suscipit cumque illum veritatis porro magni omnis, itaque earum nam neque hic officia quam! Natus ratione quam repudiandae deleniti aliquid vitae impedit dolorum ad libero!
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="cardBtn btn btn-outline-light">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
