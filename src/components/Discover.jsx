import React from "react";

export function Discover() {
  return (
    <div className="container discover">
      <div className="row">
        <div className="col-md-6">
          <button className="btn btn-primary">Load more</button>
          <p>
            Etiam et id tincidunt faucibus mollis a sociis pretium fermentum
            quis magna faucibus lacus.
          </p>
        </div>
        <div className="col-md-2">
          <div>
            <h2>Market Place</h2>
            <a href="#Home">Home</a>
            <a href="#Activity">Activity</a>
            <a href="#Discover">Discover</a>
            <a href="#Learnmore">Learn more</a>
          </div>
        </div>
        <div className="col-md-2">
          <div>
            <h2>Company</h2>
            <a href="#AboutUs">About Us</a>
            <a href="#Services">Services</a>
            <a href="#Portfolio">Portfolio</a>
          </div>
        </div>
        <div className="col-md-2">
          <div>
            <h2>Contact</h2>
            <a href="#AboutUs">Facebook</a>
            <a href="#Services">Instgram</a>
            <a href="#Portfolio">Twitter</a>
            <a href="#Portfolio">Email</a>
          </div>
        </div>
      </div>
    </div>
  );
}
