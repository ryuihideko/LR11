const users = [
  { name: "Іван", email: "ivan@example.com", age: 20 },
  { name: "Софія", email: "sofia@example.com", age: 22 },
  { name: "Артем", email: "artem@example.com", age: 19 }
];

for (const { name, email, age } of users) {
  console.log(`Завдання 5 — Ім'я: ${name}, Email: ${email}, Вік: ${age}`);
}