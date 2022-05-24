import React from "react";
import { mapLabels, IMapLabels } from "../Constants";
import { timestampToDate } from "../Utils";

const GJNumberLabel = ({
  label,
  value,
}: {
  label: keyof IMapLabels;
  value: number;
}) => {
  return (
    <div className="space-y-3">
      <p className="text-zinc-700/75">
        {label === "timestamp"
          ? timestampToDate(value)
          : value}
      </p>
      <h1 className="text-green-600/75 space-y-10">{mapLabels[label]}</h1>
    </div>
  );
};

export default GJNumberLabel;
