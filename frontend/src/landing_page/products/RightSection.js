import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 col-12 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={learnMore}>Learn More 
                <i class="fa fa-long-arrow-right p-1" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-12 text-center">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;