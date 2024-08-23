// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.
// Є input, у який користувач вводить бажану кількість елементів.
// Після натискання на кнопку Create має рендеритися(додаватися в DOM)
// колекція з відповідною кількістю елементів і очищатися значення в інпуті.
// При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова.
// Після натискання на кнопку Destroy колекція елементів має очищатися.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>
// <div id="boxes"></div>

// Після натискання користувачем на кнопку Create треба провалідувати значення в input,
//   воно має бути в межах від 1 до 100 включно.Тільки якщо воно задоволяє умову, мають додаватися нові < div > елементи в DOM.
// Для рендеру елементів на сторінці створи функцію createBoxes(amount),
//   яка приймає один параметр — число, що зберігає кількість елементів для рендеру.
// Функція має створювати стільки < div > елементів, скільки вказано в параметрі amount.
//  Усі ці < div > мають додаватися за одну операцію у DOM дочірніми елементами для div#boxes.
// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону.
//  Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.
//  Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(), яка очищає вміст div#boxes,
// у такий спосіб видаляючи всі створені елементи.

// На що буде звертати увагу ментор при перевірці:

// Після кліку на кнопку Create, якщо в input значення поза межами діапазону 1-100, нічого не відбувається
// Після кліку на кнопку Create в div#boxes за одну операцію додається така кількість різнокольорових квадратів, яка вказана в input.
// Значення input очищається
// Після повторного кліку на кнопку Create попередні квадрати повністю прибираються і замість них додаються нові у кількості,
//   що вказана в input.Значення input очищається
// Усі квадрати в div#boxes різнокольорові і мають фон випадкового кольору
// Перший квадрат у div#boxes має розміри 30px на 30px, а кожен наступний на 10px вищий і ширший від попереднього
// Після натискання на кнопку Destroy усі квадрати з div#boxes мають видалятися

const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createBtn.addEventListener(`click`, () => {
  const amount = Number(input.value);
  if (amount < 1 || amount > 100) {
    alert(`Enter a number from 1 to 100`);
    return;
  }
  destroyBoxes();
  createBoxes(amount);
  input.value = '';
});
destroyBtn.addEventListener(`click`, () => {
  destroyBoxes();
});
function createBoxes(amount) {
  const boxes = [];
  for (let index = 0; index < amount; index++) {
    const size = 30 + [index] * 10;
    const box = document.createElement(`div`);
    box.classList.add(`box`);
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  boxesContainer.append(...boxes);
}
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
