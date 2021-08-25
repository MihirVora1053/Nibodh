import React from "react";

export default function Hero() {
  return (
    <div className="row heroDiv">
      <div className="hero-heading">
        <h1 className="display-2">Save Trees</h1>
        <h1 className="display-1">Plant Trees</h1>
      </div>
      <div className="help-us">
        <button className="btn btn-outline-success">
          HELP US TO PLANT TREES
        </button>
      </div>
      <div className="hero-footer row">
        <div className="col-4">
          <h1 className="text-center">01</h1>
        </div>
        <div className="col-4">
          <h1 className="text-center">02</h1>
        </div>
        <div className="col-4">
          <h1 className="text-center">03</h1>
        </div>
      </div>
    </div>
  );
}
