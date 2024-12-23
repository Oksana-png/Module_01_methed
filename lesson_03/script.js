"use strict";

{
  const product = "Миска";
  const count = 2;
  const category = "Товары для животных";
  const price = 250;

  console.log(product);
  console.log(`Сумма: ${count * price}`);
}

{
  const product = "Вешалка";
  const count = 10;
  const category = "Товары для дома";
  const price = 190;
}

{
  const product = "Яблоко";
  const count = 50;
  const category = "Фрукты";
  const price = 20;
}

const product = prompt("Наименования товара");
const count = +prompt("Количество товара");
const category = prompt("Категория товара");
const price = +prompt("Цена товара");

console.log(`На складе ${count} единицы товара "${product}" на сумму ${price * count} деревянные`);
