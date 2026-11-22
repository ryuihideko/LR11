
const player = {
  name: "Герой",
  hp: 100,
  attackPower: 20
};

const monster = {
  name: "Гоблін",
  hp: 80,
  attackPower: 15
};

const inventory = ["меч", "щит", "зілля здоров'я"];

function showStatus() {
  console.log(`Гравець: ${player.name}`);
  console.log(`Здоров'я: ${player.hp} HP`);
  console.log(`Інвентар: ${inventory.join(", ")}`);
  console.log();
  console.log(`Монстр: ${monster.name}`);
  console.log(`Здоров'я: ${monster.hp} HP`);
  console.log();
}

function attack() {
  console.log(`${player.name} атакує монстра`);
  monster.hp -= player.attackPower;
  if (monster.hp < 0) {
    monster.hp = 0;
  }
  console.log(`Здоров'я монстра: ${monster.hp} HP`);
}

function monsterAttack() {
  console.log(`Монстр атакує героя`);
  const hasShield = inventory.includes("щит");
  const damage = hasShield && monster.hp > 0 ? monster.attackPower : monster.attackPower;

  player.hp -= damage;
  if (player.hp < 0) {
    player.hp = 0;
  }
  console.log(`Здоров'я героя: ${player.hp} HP`);
}

console.log('Гра «Битва з монстром»');
console.log();
showStatus();

let round = 1;

while (player.hp > 0 && monster.hp > 0) {
  console.log(`=== Раунд ${round} ===`);
  attack();

  if (monster.hp > 0) {
    console.log();
    monsterAttack();
  }

  console.log();
  round++;
}

if (player.hp > 0 && monster.hp <= 0) {
  console.log("Перемога!");
  console.log("Герой переміг монстра!");
} else if (monster.hp > 0 && player.hp <= 0) {
  console.log("Поразка!");
  console.log("Монстр переміг героя!");
} else {
  console.log("Нічия! Обидва учасники вибули з бою.");
}