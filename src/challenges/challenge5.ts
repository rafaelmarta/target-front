export function challenge5(str: string): void {
  let reversedString: string = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }

  console.log(`String original: ${str}`);

  console.log(`String invertida: ${reversedString}`);
}
