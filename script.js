'use strict';

const accaunt1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};

const accaunt2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const accaunt3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const accaunt4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accaunts = [accaunt1, accaunt2, accaunt3, accaunt4];

const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumCashBack = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

function displayMovements(movements) {
  // movements => [200, 450, -400, 3000, -650, -130, 70, 1300],
  containerMovements.innerHTML = '';
  movements.forEach(move => {
    let type = move > 0 ? 'deposit' : 'withdrawal';
    const html = `
          <div class="movements__row">
            <div class="movements__type movements__type--${type}">
              1 ${type}
            </div>

            <div class="movements__date">24/01/2037</div>
            <div class="movements__value">${move}$</div>
          </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

function displayBalance(movements) {
  // movements => [200, 450, -400, 3000, -650, -130, 70, 1300],
  let balance = movements.reduce((acc, element) => acc + element, 0);
  labelBalance.textContent = `${balance}$`;
}
function displaySummary(account) {
  // movements => [200, 450, -400, 3000, -650, -130, 70, 1300],
  const income = account.movements
    .filter(move => move > 0)
    .reduce((acc, val) => acc + val, 0);
  labelSumIn.textContent = `${income}$`;
  const outcome = account.movements
    .filter(move => move < 0)
    .reduce((acc, val) => acc + val, 0);
  labelSumOut.textContent = `${Math.abs(outcome)}$`;

  const cashback = account.movements
    .filter(move => move > 0)
    .map(move => move * (account.interestRate / 100))
    .filter(cash => cash > 1)
    .reduce((acc, val) => acc + val)

  labelSumCashBack.textContent = `${cashback}$`;
}

displayMovements(accaunt1.movements);
displayBalance(accaunt1.movements);
displaySummary(accaunt1);

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];