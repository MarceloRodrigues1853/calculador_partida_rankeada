// Contadores iniciais
let vitorias = 0;
let derrotas = 0;

// Registra uma vitória
function ganhaPartida() {
  vitorias++;
}

// Registra uma derrota
function perdePartida() {
  derrotas++;
}

// Calcula e mostra o nível
function calcularNivel() {
  const saldo = vitorias - derrotas;
  let nivel;
  if (vitorias < 10) nivel = "Ferro";
  else if (vitorias <= 20) nivel = "Bronze";
  else if (vitorias <= 50) nivel = "Prata";
  else if (vitorias <= 80) nivel = "Ouro";
  else if (vitorias <= 90) nivel = "Diamante";
  else if (vitorias <= 100) nivel = "Lendário";
  else nivel = "Imortal";

  console.log(`O Herói tem saldo de ${saldo} e está no nível de ${nivel}`);
}

// === CHAMADAS DE EXEMPLO ===
// simula 12 vitórias e 3 derrotas
for (let i = 0; i < 12; i++) ganhaPartida();
for (let i = 0; i < 3; i++) perdePartida();

// mostra no console
calcularNivel();
