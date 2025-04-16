
# 🎮 Calculadora de Partidas Rankeadas
Bem-vindo(a)! Aqui você encontra um script simples que classifica seu “herói” conforme as vitórias e derrotas em partidas rankeadas. ⚔️

## 🚀 Como usar

### Clone este repositório

`git clone https://github.com/MarceloRodrigues1853/seu-repo.git`

Entre na pasta do projeto
 `cd seu-repo`
 
Abra o arquivo `index.js` e ajuste os valores de vitórias e derrotas

Rode no terminal (precisa ter o `Node.js` instalado)
```node
node index.js
```

## 🔍 Regras de Classificação

🛠️ Ferro: menos de 10 vitórias

🥉 Bronze: até 20 vitórias

🥈 Prata: até 50 vitórias

🥇 Ouro: até 80 vitórias

💎 Diamante: até 90 vitórias

🌟 Lendário: até 100 vitórias

☄️ Imortal: 101 vitórias ou mais

## 📜 Exemplo de Código

```javascript

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


```
👍 Gostou?
Se curtiu, deixa uma ⭐ no repositório e compartilha com a galera!
