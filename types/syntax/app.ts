const counter = document.querySelector('#counter') as HTMLButtonElement;
let count: number = 0;

const increment = (e: Event): void => {
  e.preventDefault();
  count++;

  const span = counter?.querySelector('span');

  if (span) {
    span.innerText = count.toString();
  }
}

counter.addEventListener('click', increment);

// const user: { firstname: string, lastname: string, [key: string]: number | string } = {
//   firstname: 'John',
//   lastname: 'Doe',
//   age: 12,
// }