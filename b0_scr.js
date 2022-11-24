let transfers = [
{ ans_from: 'Moscow', ans_to: 'Sochi', ans_transport: 'Airplane', 
ans_time1: '22-12-2022-19:12', ans_time2: '22-12-2022-23:44', 
ans_cost: '8 500'}
];

function getRandomElement(arr) {
	let rnIdx = Math.floor(Math.random() * arr.length);
	return arr[rnIdx];
}

let button = document.querySelector('.submit');
let from = document.querySelector('.from');
let to = document.querySelector('.to');
let transport = document.querySelector('.transport');
let time1 = document.querySelector('.time1');
let time2 = document.querySelector('.time2');
let cost = document.querySelector('.cost');

button.addEventListener('Click', function() {
	let randomElement = getRandomElement(transfers);
	smoothly(from, 'textContent', randomElement.ans_from);
	smoothly(to, 'textContent', randomElement.ans_to);
	smoothly(tansport, 'textContent', randomElement.ans_transport);
	smoothly(time1, 'textContent', randomElement.ans_time1);
	smoothly(time2, 'textContent', randomElement.ans_time2);
	smoothly(cost, 'textContent', randomElement.ans_cost);
})