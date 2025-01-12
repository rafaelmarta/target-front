import readline from "readline";

export async function getUserInput(promptMessage: string): Promise<string> {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(promptMessage, (input) => {
      rl.close();
      resolve(input.trim());
    });
  });
}
