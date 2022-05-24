import React from "react";

const Ticker = ({ atv }: { atv: string }) => {
  return (
    <div className="flex flex-col  h-full text-center w-full space-y-10">
      <h1 className="text-zinc-800 capitalize font-bold">
        average ticker values
      </h1>
      <p>{atv}</p>
    </div>
  );
};

export default Ticker;
