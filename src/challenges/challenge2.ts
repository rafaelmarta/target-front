export function challenge2(num: number): void {
  if (num < 0) {
    console.log(
      `O número ${num} não pertence à sequência de Fibonacci pois é negativo.`
    );
    return;
  }

  const sequence = [0, 1];

  while (sequence[sequence.length - 1] < num) {
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    );
  }

  const belongs = sequence.includes(num);

  console.log(
    `O número ${num} ${
      belongs ? "pertence" : "não pertence"
    } à sequência de Fibonacci.`
  );
}
