import { challenge1 } from "./challenges/challenge1.js";

const challengeToExecute = process.argv[2];

switch (challengeToExecute) {
  case "challenge1":
    console.log("INICIANDO DESAFIO 1:");
    challenge1();
    console.log("Fim");
    break;
  default:
    console.log(
      "Escolha um desafio para executar. Exemplo: npm run challenge1"
    );
}
