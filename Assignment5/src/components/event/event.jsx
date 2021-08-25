import React from 'react';

export default function event() {
    return (
        <div className="main-event mt-3">
            <div className="row justify-content-around">
                <div className="col-4">
                    <div className="eventCard">
                        <h1 className="display-5 text-light">#Events</h1>
                        <h2 className="text-white">Your text goes here</h2>
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium totam aliquam omnis consequuntur, ex rerum beatae iste soluta adipisci numquam reprehenderit sunt rem dolorem pariatur.</p>
                    </div>
                </div>
                <div className="col-6 upcomingEvent">
                    <h2 className="display-6 text-white font-weight-bold">Upcoming <span className="spanEvent">Events</span></h2>
                    <div className="d-flex">
                        <span className="spanE"></span>
                    </div>
                    <div className="event-para">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus labore qui quod quo in quam facere ratione molestias neque repellat.</p>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="calender">
                                <span className="digit">02</span>
                                <br/>
                                <span className="month">MAY</span>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="cal-head">
                                <h5>Your text goes here</h5>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt suscipit accusamus repellat beatae, ducimus aspernatur.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 mt-3">
                        <div className="calender">
                                <span className="digit">10</span>
                                <br/>
                                <span className="month">MAY</span>
                            </div>
                        </div>
                        <div className="col-9 mt-3">
                        <div className="cal-head">
                                <h5>Your text goes here</h5>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt suscipit accusamus repellat beatae, ducimus aspernatur.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
