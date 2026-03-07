import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 mb-4">
          To create a ticket, select a relevant topic
        </h1>

        {/* 1️⃣ Account Opening */}
        <div className="col-lg-4 col-md-6 col-12 p-4 mt-2 mb-2">
          <h5 style={{ color: "#333", fontWeight: "500" }}>
            <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>
            Account Opening
          </h5>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Online Account Opening</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Offline Account Opening</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Company, Partnership and HUF Account Opening</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>NRI Account Opening</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Charges at Zerodha</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Zerodha IDFC FIRST Bank 3-in-1 Account</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Getting Started</a><br />
        </div>

        {/* 2️⃣ Your Zerodha Account */}
        <div className="col-lg-4 col-md-6 col-12 p-4 mt-2 mb-2">
          <h5 style={{ color: "#333", fontWeight: "500" }}>
            <i className="fa fa-user me-2" aria-hidden="true"></i>
            Your Zerodha Account
          </h5>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Login Credentials</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Account Modification and Segment Addition</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>DP ID and Bank Details</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Your Profile</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Transfer and Conversion of Shares</a><br />
        </div>

        {/* 3️⃣ Trading & Kite */}
        <div className="col-lg-4 col-md-6 col-12 p-4 mt-2 mb-2">
          <h5 style={{ color: "#333", fontWeight: "500" }}>
            <i className="fa fa-line-chart me-2" aria-hidden="true"></i>
            Trading & Kite
          </h5>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Margin/Leverage, Product and Order Types</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Kite Web and Mobile</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Trading FAQs</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Corporate Actions</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Sentinel</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Kite API</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Stockreports+</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>GTT</a><br />
        </div>

        {/* 4️⃣ Funds */}
        <div className="col-lg-4 col-md-6 col-12 p-4 mt-2 mb-2">
          <h5 style={{ color: "#333", fontWeight: "500" }}>
            <i className="fa fa-credit-card me-2" aria-hidden="true"></i>
            Funds
          </h5>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Adding Funds</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Fund Withdrawal</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>eMandates</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Fund Transfer Time</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>UPI Linking Issues</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Payment Failures</a><br />
        </div>

        {/* 5️⃣ Console */}
        <div className="col-lg-4 col-md-6 col-12 p-4 mt-2 mb-2">
          <h5 style={{ color: "#333", fontWeight: "500" }}>
            <i className="fa fa-pie-chart me-2" aria-hidden="true"></i>
            Console
          </h5>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Reports</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Ledger</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Portfolio</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Tax P&L Reports</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Profit & Loss Statements</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Account Summary</a><br />
        </div>

        {/* 6️⃣ Coin */}
        <div className="col-lg-4 col-md-6 col-12 p-4 mt-2 mb-2">
          <h5 style={{ color: "#333", fontWeight: "500" }}>
            <i className="fa fa-circle-o me-2" aria-hidden="true"></i>
            Coin
          </h5>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Understanding Mutual Funds</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>About Coin</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Buying and Selling through Coin</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>SIP Management</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Redemption Process</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2" }}>Tracking Investments</a><br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
