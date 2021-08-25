import React from 'react'

export default function footer() {
    return (
        <div>
            <div class="container-fluid ">
                <div class="row">
                    <div class="col-md-4">
                        <ul class="footer">
                            <li>Characteristic</li>
                            <li>Attribute</li>
                            <li>Quality</li>
                            <li>Property</li>
                            <li>Trait</li>
                            <li>Trick</li>
                        </ul>


                    </div>
                    <div class="col-md-4">
                        <ol>
                            <li class="list-item">
                                Communication
                            </li>
                            <li class="list-item">
                                Planning
                            </li>
                            <li class="list-item">
                                Modelling
                            </li>
                            <li class="list-item">
                                Construction
                            </li>
                            <li class="list-item">
                                Deployment
                            </li>
                        </ol>
                    </div>
                    <div class="col-md-4">
                        <blockquote class="blockquote">
                            <p class="mb-0">
                                “Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.”                  </p>
                            <footer class="blockquote-footer">
                                Mihir Vora
                            </footer>
                        </blockquote>
                        <address>
                            <strong>Mihir, Inc.</strong><br /> A/201, Raj Arcade, Folsom Ave<br /> Mumbai, CA 94107<br /> <abbr title="Phone">P:</abbr> (123) 456-7890
                        </address>
                    </div>
                </div>
            </div>
        </div>
    )
}
