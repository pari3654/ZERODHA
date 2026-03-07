// React hooks for state and context
import React, { useState, useContext } from "react";

// Axios (future backend/API use ke liye)
import axios from "axios";

// Global context to communicate with Buy/Sell window
import GeneralContext from "./GeneralContext";

// Material UI components for hover animations
import { Tooltip, Grow } from "@mui/material";

// Material UI icons used in watchlist
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

// Dummy watchlist data (static data for UI)
import { watchlist } from "../data/data";

// Chart component for visual representation
import { DoughnutChart } from "./DoughnoutChart";

// Extract stock names to use as labels for chart
const labels = watchlist.map((subArray) => subArray["name"]);

const WatchList = () => {

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">

      <div className="search-container">
        <input
          type="text"
          placeholder="Search eg: infy, bse, nifty fut weekly"
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      <DoughnutChart data={data} />

    </div>
  );
};

export default WatchList;


// ---------------- SINGLE STOCK ROW ----------------

const WatchListItem = ({ stock }) => {

  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = () => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = () => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">

        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>

        <div className="itemInfo">

          <span className="percent">{stock.percent}</span>

          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}

          <span className="price">{stock.price}</span>

        </div>
      </div>

      {showWatchlistActions && <WatchListActions uid={stock.name} />}

    </li>
  );
};


// ---------------- BUY / SELL BUTTONS ----------------

const WatchListActions = ({ uid }) => {

  const generalContext = useContext(GeneralContext);

  // BUY CLICK
  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid, "BUY");
  };

  // SELL CLICK
  const handleSellClick = () => {
    generalContext.openBuyWindow(uid, "SELL");
  };

  return (
    <span className="actions">
      <span>

        <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
          <button className="buy" onClick={handleBuyClick}>
            Buy
          </button>
        </Tooltip>

        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell" onClick={handleSellClick}>
            Sell
          </button>
        </Tooltip>

        <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>

        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>

      </span>
    </span>
  );
};