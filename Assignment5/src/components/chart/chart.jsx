import React from "react";
let array1=
    [
        {
            name:"Clean Air",
            val:86
        },
        {
            name:"Wildlife Habitat",
            val:57
        },
        {
            name:"Fight Climate Change",
            val:65
        },
        {
            name:"Flood Control",
            val:34
        },
        {
            name:"Provide Food",
            val:92
        }
    ]

export default function chart() {
  return (
    
    <div className="row custom-chart">
      <div className="col-4 mx-4">
        <div className="chart-heading">
          <h1 className="display-4 text-success px-5 text-uppercase">
            Where the money goes
          </h1>
        </div>
        <div className="chart-para px-5 pt-2">
          <p className="text-primary">
            Current operation and program spending breakdown
          </p>
        </div>

        <div className="chart-list px-4 mx-1">
          <ul className="">
            <li>Clean Air</li>
            <li>Wildlife Habitat</li>
            <li>Fight Climate Change</li>
            <li>Flood Control</li>
            <li>Provide Food</li>
          </ul>
        </div>
        <div className="chart-btn px-5">
          <button className="btn btn-warning custom-chart-btn">
            Donate Now
          </button>
        </div>
      </div>
      <div className="col-7">

          
        <div className="main-container d-flex justify-content-around">
            {
                array1.map((data)=>{
                    return(
                        <div className="chart-container">
                        <div className="chart" style={{height:`${data.val}%`}}>
                            <div className="andarKaSpan">{data.name}</div>
                        </div>
                        <span className="span-per">{data.val}%</span>
                        </div>
                    );
                })
            }
            

        </div>
      </div>
    </div>
  );
}
