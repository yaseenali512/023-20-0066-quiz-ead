import React from "react";

const Auctions = () => {
  return (
    <div className="auctions">
      <h3>Hot auctions</h3>
      <div className="myAuctions row">
        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
          <img
            src="https://images.unsplash.com/photo-1552083974-186346191183?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="img-fluid custom-img-size"
          />

          {/* Additional information below the image */}
          <div className="additional-info">
            <p>Lorem Ipsum</p>
            <p>1.20 Weth</p>
          </div>

          {/* Horizontal line */}
          <hr className="my-2" />

          {/* Countdown and Buy button */}
          <div className="countdown-and-buy">
            <p>Ends in 01.34.45</p>
            <button className="btn btn-primary">Buy</button>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
          <img
            src="https://images.unsplash.com/photo-1507214617719-4a3daf41b9ac?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="img-fluid custom-img-size"
          />

          {/* Additional information below the image */}
          <div className="additional-info">
            <p>Lorem Ipsum</p>
            <p>1.50 Weth</p>
          </div>

          {/* Horizontal line */}
          <hr className="my-2" />

          {/* Countdown and Buy button */}
          <div className="countdown-and-buy">
            <p>Ends in 02.45.30</p>
            <button className="btn btn-primary">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auctions;
