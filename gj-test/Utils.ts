import { IPair } from "./Constants";
import { IMapLabels } from "./Constants";

export const turnToListOfPairs = (
  pairData: IPair
): { value: number; label: keyof IMapLabels }[] =>
  Object.entries(pairData).map((pair) => ({
    value: Number(pair[1]),
    label: pair[0] as keyof IMapLabels,
  }));


export const timestampToDate = (timestamp: number): string => {
    let date = new Date(timestamp * 1000).toLocaleString().split(",")[0];
    return date;
}
