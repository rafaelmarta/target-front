import pkg from "lodash";
import { IStateRevenue } from "../types/challenge4";
const { sum } = pkg;

export function challenge4(): void {
  const revenueByState: IStateRevenue = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  const total = sum(Object.values(revenueByState));

  Object.entries(revenueByState).forEach(([state, revenue]) => {
    const percentage = (revenue / total) * 100;
    console.log(`${state}: ${percentage.toFixed(2)}%`);
  });
}
