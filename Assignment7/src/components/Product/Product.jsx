import React from "react";

export default function Product() {
  return (
    <div className="container d-flex">
        
      <div class="card m-auto" style={{width: "18rem"}}>
        <img
          class="card-img-top"
          src="https://sugargeekshow.com/wp-content/uploads/2020/10/baked_donut_recipe_featured.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div class="card py-5 my-4" style={{width: "18rem"}}>
        <img
          class="card-img-top"
          src="https://www.hangar-12.com/hubfs/candy.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
