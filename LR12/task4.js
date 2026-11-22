const person = {
  firstName: "Максим",
  lastName: "Шевченко",
  age: 21
};

person.email = "maksym.shevchenko@example.com";
delete person.age;

console.log("Завдання 4:", person);