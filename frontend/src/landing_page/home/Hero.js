import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>

     <div className="text-center">
    <button
    className="btn btn-primary fs-5 px-4 py-2 mb-5"
    style={{ width: "250px" }}
    >
    Signup Now
  </button>
</div>
      
      </div>
    </div>
  );
}

export default Hero;
