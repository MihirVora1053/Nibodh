import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-success">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            MIHIR VORA
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/">
                  HOME
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  ABOUT
                </Link>
              </li>

              <li class="nav-item">
                <Link
                  class="nav-link"
                  to="/contact"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  CONTACT US
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  to="/product"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  PRODUCT
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  to="/donation"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  DONATION
                </Link>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
