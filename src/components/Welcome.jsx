import React from "react";

function Welcome() {
  return (
    <div className="welcome container">
      <div className="row">
        <div className="col-md-6">
          <h1>
            Discover, collect, and charity in extraordinary NFT marketplace
          </h1>
          <p>
            In aenean posuere lorem risus nec. Tempor tincidunt aenean purus
            purus vestibulum nibh mi venenatis
          </p>
          <div className="mt-3">
            <button className="btn btn-primary mr-2">Explore</button>
            <button className="btn btn-secondary ms-2">Create</button>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1556139943-4bdca53adf1e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="welcome-img"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
