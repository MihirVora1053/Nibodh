import React,{useState} from "react";
import img from '../images/form.png';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
export default function Contact() {
  const [name,setName]=useState("Stranger");
  let nameChange=(e)=>{
    let newName;
    e.target.value===""?newName="Stranger":newName=e.target.value;
    setName(newName);
  }
  
  return (
    <div class="container mb-5 formDiv">
      <div className="row">
        <h1>Welcome {name}</h1>
      </div>
      <div className="row">
          <div className="col-6 mt-5">
              <h1 className="display-4 bold text-success">GET IN TOUCH</h1>
              <h1 className="display-2 bolder text-danger">CONTACT US!</h1>
              <div className="line5">
              <span></span>
          </div>
          </div>
          
      </div>
      <div className="row">
        <div className="col-6">
          <div className="row mt-4 mb-2">
            <div className="col-6 form-group">
            
              <input
                type="text"
                class="form-control"
                id="fullName"
                placeholder="&#xf007; Full Name"
                style={{fontFamily:"Arial, FontAwesome"}}
                onChange={nameChange}
              />
            </div>
            <div className="col-6 form-group">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="row my-2">
            <div className="col-6">
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="Address"
              />
            </div>
            <div className="col-6">
              <input
                type="tel"
                class="form-control"
                id="tel"
                placeholder="Phone"
              />
            </div>
          </div>
          <div className="col-12">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              placeholder="Details"
            ></textarea>
          </div>
          <button className="btn btn-success py-2 my-3">SEND NOW</button>
        </div>
        <div className="col-6">
            <img className="formImg" src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
