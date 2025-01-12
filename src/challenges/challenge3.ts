import pkg from "lodash";
import dados from "../dados.json" assert { type: "json" };

const { min, max, mean, filter } = pkg;

export function challenge3(): void {
  const validDays = filter(dados, (day) => day.valor > 0);
  const revenueValues = validDays.map((day) => day.valor);

  const minimumRevenue = min(revenueValues);
  const maximumRevenue = max(revenueValues);

  const averageRevenue = mean(revenueValues);

  const daysAboveAverage = filter(
    validDays,
    (day) => day.valor > averageRevenue
  ).length;

  console.log(`Menor valor de faturamento: R$ ${minimumRevenue?.toFixed(2)}`);
  console.log(`Maior valor de faturamento: R$ ${maximumRevenue?.toFixed(2)}`);
  console.log(`Número de dias acima da média: ${daysAboveAverage}`);
  console.log(
    `Média mensal (excluindo dias sem faturamento):  ${averageRevenue.toFixed(
      2
    )}`
  );
}
