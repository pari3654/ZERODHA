import React from "react";
import { Routes, Route } from "react-router-dom";

import WatchList from "./WatchList";
import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";

function Dashboard() {
  return (
    <div className="dashboard-container">



      {/* LEFT SIDE */}
      <WatchList />

      {/* RIGHT SIDE */}
      <div className="content">

        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
        </Routes>

      </div>

    </div>
  );
}

export default Dashboard;