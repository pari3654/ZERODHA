import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid, mode) => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {

  // modal open / close state
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);

  // selected stock
  const [selectedStockUID, setSelectedStockUID] = useState("");

  // BUY or SELL mode
  const [mode, setMode] = useState("");

  // open modal
  const handleOpenBuyWindow = (uid, type) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setMode(type);
  };

  // close modal
  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
    setMode("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {props.children}

      {isBuyWindowOpen && (
        <BuyActionWindow uid={selectedStockUID} mode={mode} />
      )}

    </GeneralContext.Provider>
  );
};

export default GeneralContext;