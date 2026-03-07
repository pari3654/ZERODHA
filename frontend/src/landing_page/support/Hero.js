import React from "react";

function Hero() {
  return (
    <section className="container-fluid py-5" id="supportHero">
      {/* Top Bar */}
      <div
        className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-5 px-3 px-md-5"
         id="supportWrapper"
       
      >
        <h5 className="fw-normal mb-0">Support Portal</h5>
        <a
          href="#"
          className="text-decoration-underline fw-normal fs-6 mb-0"
        >
          Track Tickets
        </a>
      </div>

      {/* Main Section */}
      <div className="row justify-content-center align-items-start px-5">
        {/* Left Column */}
     <div className="col-lg-7 col-12 p-3">
          <h2
            className="fw-semibold mb-4"
            style={{ lineHeight: "1.5", fontSize: "1.6rem" }}
          >
            Search for an answer or browse help topics to create a ticket
          </h2>

          <input
            type="text"
            placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
            className="form-control mb-4"
            style={{
              maxWidth: "600px",
              borderRadius: "10px",
              padding: "18px 24px",
              border: "none",
              fontSize: "16px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          />

          <div className="d-flex flex-wrap gap-4 small">
            <a href="#" className="text-decoration-underline">
              Track account opening
            </a>
            <a href="#" className="text-decoration-underline">
              Track segment activation
            </a>
            <a href="#" className="text-decoration-underline">
              Intraday margins
            </a>
            <a href="#" className="text-decoration-underline">
              Kite user manual
            </a>
          </div>
        </div>

        {/* Right Column */}
       <div className="col-lg-4 col-12 p-3 mt-5 mt-lg-0">
          <h4 className="fw-semibold mb-3">Featured</h4>
          <ol className="ps-3 mb-0">
            <li className="mb-2">
              <a href="#" className="text-decoration-underline">
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-underline">
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
