import React from "react";
import { IPair } from "../Constants";

const TradingPairs = ({
  tradingPairs,
  selectedPair,
}: {
  tradingPairs: IPair[];
  selectedPair: (pair: IPair) => void;
}) => {
  const handlePair = (pair: IPair) => {
    selectedPair(pair);
  };

  return (
    <div>
      {tradingPairs.map((tradingPair) => {
        return (
          <button
            key={tradingPair.name}
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block px-6 py-2.5 bg-lime-600 text-slate-50 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-lime-700 hover:shadow-lg focus:bg-lime-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lime-800 active:shadow-lg transition duration-150 ease-in-out text-center "
            onClick={() => handlePair(tradingPair)}
          >
            {tradingPair.name}
          </button>
        );
      })}
    </div>
  );
};

export default TradingPairs;
