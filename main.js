let operation;
let num1;
let num2;
let result;

do {
  operation = prompt(`Привіт! Я сучасний калькулятор. Що ви хочете зробити?
  Введіть:
    add  - для додавання
    sub  - для віднімання
    mult - для помноження
    div  - для поділу`);
} while (operation != "add" && operation != "sub" && operation != "mult" && operation != "div" && operation != null);
console.log(operation);

if (operation != null) {

  do {
    num1 = +prompt("Введіть перше число:");
  } while (isNaN(num1) != false);
  console.log(num1);

  do {
    num2 = +prompt("Введіть друге число:");
  } while (isNaN(num2) != false);
  console.log(num2);

  switch (operation) {
    case "add":
      result = num1 + num2;
      document.write(`${num1} + ${num2} = ${result}`);
      break;
    case "sub":
      result = num1 - num2;
      String(num2)[0] != "-" ?
        document.write(`${num1} - ${num2} = ${result}`) :
        document.write(`${num1} - (${num2}) = ${result}`);
      break;
    case "mult":
      result = num1 * num2;
      result == 0 ?
        alert`Помноження на нуль завжди буде нуль!` :
        document.write(`${num1} × ${num2} = ${result}`);
      break;
    case "div":
      num2 != 0 ?
        (result = num1 / num2,
          document.write(`${num1} ÷ ${num2} = ${result}`)) :
        alert(`На нуль ділити не можна!`);
      break;
  }

} else {
  document.write("До побачення!");
}
