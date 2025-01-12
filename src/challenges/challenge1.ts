export function challenge1(): void {
  const INDICE = 13;
  let SOMA = 0;
  let k = 0;

  while (k < INDICE) {
    k = k + 1;
    SOMA = SOMA + k;
  }

  console.log(`Valor final da variável SOMA = ${SOMA}`);
}
