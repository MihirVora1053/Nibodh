import React from 'react'
import img1 from './Images/1.jpg'
import img2 from './Images/2.jpg'
import img3 from './Images/3.jpg'
import img4 from './Images/4.jpg'
import img5 from './Images/5.jpg'
import img6 from './Images/6.jpg'
import img7 from './Images/7.jpg'
export default function main() {
    return (
        <div>
            <div class="carol">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={img1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={img2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={img3} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img id="i4" src={img4} alt="" />
                        <button class="btn btn-success d-block">CLICK HERE</button>
                    </div>
                    <div class="col-md-3">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, alias provident eligendi
                            aliquid animi doloribus quos. Harum esse qui officiis maiores est laborum modi officia.
                            Aut dese tenetur ut minus ab natus, nam necessitatibus?
                            Unde sequi veritatis incidunt dolore earum, ab provident soluta nihil nam delectus, eaque optio.
                            <div class="l4">
                                <a href="https://www.google.com" id="l2" class="btn btn-info">LINK TO GOOGLE</a>
                            </div>
                        </p>
                    </div>
                    <div class="col-md-3 scroll">
                        <dl>
                            <dt>
                                Description lists
                            </dt>
                            <dd>
                                A description list is perfect for defining terms.
                            </dd>
                            <dt>
                                Euismod
                            </dt>
                            <dd>
                                Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.
                            </dd>
                            <dd>
                                Donec id elit non mi porta gravida at eget metus.
                            </dd>
                            <dt>
                                Malesuada porta
                            </dt>
                            <dd>
                                Etiam porta sem malesuada magna mollis euismod.
                            </dd>
                            <dt>
                                Felis euismod semper eget lacinia
                            </dt>
                            <dd>
                                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                Description lists
                            </dt>
                            <dd>
                                A description list is perfect for defining terms.
                            </dd>
                            <dt>
                                Euismod
                            </dt>
                            <dd>
                                Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.
                            </dd>
                            <dd>
                                Donec id elit non mi porta gravida at eget metus.
                            </dd>
                            <dt>
                                Malesuada porta
                            </dt>
                            <dd>
                                Etiam porta sem malesuada magna mollis euismod.
                            </dd>
                            <dt>
                                Felis euismod semper eget lacinia
                            </dt>
                            <dd>
                                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                            </dd>
                        </dl>
                    </div>
                    <div class="col-md-3">
                        <div class="row">
                            <div class="col-md-6">
                                <img src={img5} alt="" />
                            </div>
                            <div class="col-md-6">
                                <img src={img6} alt="" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <img src={img7} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
