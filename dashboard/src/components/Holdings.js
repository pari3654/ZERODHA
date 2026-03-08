import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";


const Holdings = () => {

  const [allHoldings, setAllHoldings] = useState([]);

  // Fetch holdings from backend
   useEffect(() => {

  axios.get("https://zerodha-2rqq.onrender.com/allHoldings", {
    withCredentials: true
  })
  .then((res) => {
    console.log("API DATA:", res.data);
    setAllHoldings(res.data);
  })
  .catch((err) => {
    console.log(err);
  });

}, []);

  // Chart labels
  const labels = allHoldings.map((stock) => stock.name);

  // Chart data
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price || 0),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

     <div className="order-table ">
       <table className="table-scroll">

          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>

            {allHoldings.map((stock, index) => {

              const price = stock.price || 0;
              const qty = stock.qty || 0;
              const avg = stock.avg || 0;

              const curValue = price * qty;
              const profit = curValue - avg * qty;

              const isProfit = profit >= 0;

              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>

                  <td>{stock.name}</td>

                  <td>{qty}</td>

                  <td>{avg.toFixed(2)}</td>

                  <td>{price.toFixed(2)}</td>

                  <td>{curValue.toFixed(2)}</td>

                  <td className={profClass}>
                    {profit.toFixed(2)}
                  </td>

                  <td className={profClass}>
                    {stock.net || "0%"}
                  </td>

                  <td className={dayClass}>
                    {stock.day || "0%"}
                  </td>

                </tr>
              );
            })}

          </tbody>

        </table>
      </div>

    <div className="row text-center">

       <div className="col-lg-4 col-12">
          <h5>
            29,875.<span>55</span>
          </h5>
          <p>Total investment</p>
        </div>

        <div className="col">
          <h5>
            31,428.<span>95</span>
          </h5>
          <p>Current value</p>
        </div>

        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>

      </div>

      <VerticalGraph data={data} />

    </>
  );
};

export default Holdings;
