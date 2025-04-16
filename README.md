# 🎮 Calculadora de Partidas Rankeadas

Bem-vindo(a)! Aqui você encontra um script simples que classifica seu “herói” conforme as vitórias e derrotas em partidas rankeadas. ⚔️

---

## 🚀 Como usar

1. Clone este repositório  
   ```bash
  git clone https://github.com/MarceloRodrigues1853/seu-repo.git
Entre na pasta do projeto

cd seu-repo
Abra o arquivo index.js e ajuste os valores de vitórias e derrotas

Rode no terminal (precisa ter o Node.js instalado)

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

📜 Exemplo de Código

````javascript

function calcularRanked(v, d) {
  const saldo = v - d;
  let nivel;
  if (v < 10) nivel = "Ferro";
  else if (v <= 20) nivel = "Bronze";
  else if (v <= 50) nivel = "Prata";
  else if (v <= 80) nivel = "Ouro";
  else if (v <= 90) nivel = "Diamante";
  else if (v <= 100) nivel = "Lendário";
  else nivel = "Imortal";

  console.log(`O Herói tem saldo de ${saldo} e está no nível de ${nivel}`);
}
```

👍 Gostou?
Se curtiu, deixa uma ⭐ no repositório e compartilha com a galera!
Boas partidas! 🎉🎉🎉
