import React from 'react'


export default function header(){
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-danger fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">MIHIR</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse  d-flex justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0 mx-4">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="form.html">Sign Up/Login</a>
              </li>
            </ul>
            <img class="logo" src="https://media.istockphoto.com/vectors/letter-p-concept-illustration-vector-template-vector-id1133957219?k=6&m=1133957219&s=612x612&w=0&h=KPnIJA3CGuW3ujF7lGv0u0JErmk2Vwx-xqmWLoAGRkI=" alt=""/>
          </div>
        </div>
      </nav>
    )
}
