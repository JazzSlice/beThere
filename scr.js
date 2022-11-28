let transfers = [
{ ans_from: 'Moscow', ans_to: 'Sochi', ans_transport: 'Airplane', 
ans_time1: '22-12-2022-19:12', ans_time2: '22-12-2022-23:44', 
ans_cost: '8 500'},
{ ans_from: 'Madagaskar', ans_to: 'Ogarevo', ans_transport: 'Airplane', 
ans_time1: '22-12-2022-19:12', ans_time2: '22-12-2022-23:44', 
ans_cost: '118 500'}
];

function getRandomElement(arr) {
	let rnIdx = Math.floor(Math.random() * arr.length);
	return arr[rnIdx];
}

let button = document.querySelector('.button');
let fr1 = document.querySelector('.fr1');
let to1 = document.querySelector('.to1');
let tranp1 = document.querySelector('.tranp1');
let time1 = document.querySelector('.time1');
let time2 = document.querySelector('.time2');
let cst1 = document.querySelector('.cst1');

button.addEventListener('click', function() {
	let randomElement = getRandomElement(transfers);
	fr1.textContent = randomElement.ans_from;
	to1.textContent = randomElement.ans_to;
	tranp1.textContent = randomElement.ans_transport;
	time1.textContent = randomElement.ans_time1;
	time2.textContent = randomElement.ans_time2;
	cst1.textContent = randomElement.ans_cost;
});