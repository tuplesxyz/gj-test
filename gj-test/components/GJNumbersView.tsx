import React from "react";
import GJNumberLabel from "./GJNumberLabel";
import { v4 as uuidv4 } from "uuid";
import { IMapLabels } from '../Constants';

const GJNumbersView = ({
  title,
  listOfNumberDescPairs,
}: {
  title: string | undefined;
  listOfNumberDescPairs: { value: number; label: keyof IMapLabels }[];
}) => {
  return (
    <div className="space-y-5 space-x-5">
      <h1 className="space-x-5">{title}</h1>
      <div className="grid grid-cols-3 grid-rows-3 gap-10">
        {listOfNumberDescPairs
          ? listOfNumberDescPairs.map((pair) => {
              return (
                <GJNumberLabel
                  label={pair.label}
                  value={pair.value}
                  key={uuidv4()}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default GJNumbersView;
