const challengeToExecute = process.argv[2];

switch (challengeToExecute) {
  case "challenge":
    console.log("Iniciando desafio");
    break;
  default:
    console.log("Escolha um desafio para executar. Exemplo: npm run challenge");
}
