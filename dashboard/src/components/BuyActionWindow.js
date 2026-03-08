import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode }) => {

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const generalContext = useContext(GeneralContext);

  // BUY FUNCTION
  const handleBuyClick = () => {

    axios.post(
      "https://zerodha-2rqq.onrender.com/newOrder",
      {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      },
      {
        withCredentials: true
      }
    )
    .then(() => {

      toast.success("Order placed successfully");

      generalContext.closeBuyWindow();

      setTimeout(() => {
        window.location.reload();
      }, 1000);

    })
    .catch(() => {
      toast.error("Order failed");
    });

  };

  // SELL FUNCTION
  const handleSellClick = () => {

    axios.post(
      "https://zerodha-2rqq.onrender.com/newOrder",
      {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
      },
      {
        withCredentials: true
      }
    )
    .then(() => {

      toast.success("Order placed successfully");

      generalContext.closeBuyWindow();

      setTimeout(() => {
        window.location.reload();
      }, 1000);

    })
    .catch(() => {
      toast.error("Order failed");
    });

  };

  // CANCEL FUNCTION
  const handleCancelClick = () => {

    toast.info("Order cancelled");
    generalContext.closeBuyWindow();

  };

  return (
    <div className="container" id="buy-window" draggable="true">

      <div className="regular-order">

        <div className="inputs">

          <fieldset>
            <legend>Qty.</legend>

            <input
              type="number"
              name="qty"
              id="qty"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />

          </fieldset>

          <fieldset>

            <legend>Price</legend>

            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />

          </fieldset>

        </div>

      </div>

      <div className="buttons">

        <span>Margin required ₹140.65</span>

        <div>

          {mode === "BUY" && (
            <button className="btn btn-blue" onClick={handleBuyClick}>
              Buy
            </button>
          )}

          {mode === "SELL" && (
            <button className="btn btn-red" onClick={handleSellClick}>
              Sell
            </button>
          )}

          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>

        </div>

      </div>

    </div>
  );
};

export default BuyActionWindow;
