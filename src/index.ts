import { challenge1 } from "./challenges/challenge1.js";
import { challenge2 } from "./challenges/challenge2.js";
import { challenge3 } from "./challenges/challenge3.js";
import { challenge4 } from "./challenges/challenge4.js";
import { challenge5 } from "./challenges/challenge5.js";

const challengeToExecute = process.argv[2];

switch (challengeToExecute) {
  case "challenge1":
    console.log("INICIANDO DESAFIO 1:");
    challenge1();
    console.log("Fim");
    break;
  case "challenge2":
    console.log("INICIANDO DESAFIO 2:");
    const numberToValidate = 5;
    challenge2(numberToValidate);
    console.log("Fim");
    break;
  case "challenge3":
    console.log("INICIANDO DESAFIO 3:");
    challenge3();
    console.log("Fim");
    break;
  case "challenge4":
    console.log("INICIANDO DESAFIO 4:");
    challenge4();
    console.log("Fim");
    break;
  case "challenge5":
    console.log("INICIANDO DESAFIO 5:");
    const stringToReverse = "string para inverter";
    challenge5(stringToReverse);
    console.log("Fim");
    break;
  default:
    console.log(
      "Escolha um desafio para executar. Exemplo: npm run challenge1"
    );
}
