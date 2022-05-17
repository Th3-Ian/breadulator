//import { doc } from 'prettier';
import { convert, convertWeight } from './converter.js';
import { adjustHydration, updateWater } from './hydration-calc.js';
// Get user input from form

// Converter dom objects
const output = document.querySelector('.converter-output');
let serving = document.querySelector("#serving");
const submit = document.querySelector('#submit');
const flourAmount = document.querySelector('#flourAmount');
const flourMeasurement = document.querySelector('#flourMeasurement');
const waterAmount = document.querySelector('#waterAmount');
const waterMeasurement = document.querySelector('#waterMeasurement');
const butterAmount = document.querySelector('#butterAmount');
const butterMeasurement = document.querySelector('#butterMeasurement');
const bsAmount = document.querySelector('#bakingSodaAmount');
const bsMeasurement = document.querySelector('#bsMeasurement');
const bpAmount = document.querySelector('#bakingPowderAmount');
const bpMeasurement = document.querySelector('#bpMeasurement');
const saltAmount = document.querySelector('#saltAmount');
const saltMeasurement = document.querySelector('#saltMeasurement');
const oilAmount = document.querySelector('#oilAmount');
const oilMeasurement = document.querySelector('#oilMeasurement');
const milkAmount = document.querySelector('#milkAmount');
const milkMeasurement = document.querySelector('#milkMeasurement');
const yeastAmount = document.querySelector('#yeastAmount');
const yeastMeasurement = document.querySelector('#yeastMeasurement');

let ingredientsList = [
	{name: 'flour',amount: flourAmount,measurement: flourMeasurement},
	{name: 'water', amount: waterAmount, measurement: waterMeasurement},
	{ name: 'butter', amount: butterAmount,	measurement: butterMeasurement},
	{name :'bakingSoda', amount: bsAmount, measurement: bsMeasurement},
	{name: 'bakingPowder', amount: bpAmount, measurement: bpMeasurement},
	{name: 'salt', amount: saltAmount, measurement: saltMeasurement},
	{name: 'oil', amount: oilAmount, measurement: oilMeasurement},
	{name: 'milk', amount: milkAmount, measurement: milkMeasurement},
	{name: 'yeast', amount: yeastAmount, measurement: yeastMeasurement}
]

// Hydration Calc dom objects
let hydrationInput = document.querySelector('#hydrationLevel');
let flourHydration = document.querySelector('#flourHydration');
let waterHydration = document.querySelector('#waterHydration');
let saltHydration = document.querySelector('#saltHydraOutput')

// Placeholder amounts for Hydration Calc
hydrationInput.ariaPlaceholder = 75;

serving.value = 1;

submit.addEventListener('click', (e) => {
	e.preventDefault();
	output.innerHTML = "";
	let weightType = document.querySelector('input[name=weightType]:checked')
	for (let i = 0; i < ingredientsList.length; i++) {
		if (ingredientsList[i].measurement.value !== '' && ingredientsList[i].amount.value > 0){
			let newAmount = convert(ingredientsList[i].measurement.value + weightType.value, ingredientsList[i].amount.value, ingredientsList[i].name, serving.value);
			sendOutput(ingredientsList[i].name, newAmount, weightType.value);
		}
	}
})



// for loop to create elements and display answer into #converter-output

function sendOutput(name, num, weight) {
	const p = document.createElement('p')
	p.textContent = `${name} weighs ${num} ${weight}`;
	output.appendChild(p);
}


// Hydration Calculator Event Listeners

hydrationInput.addEventListener('change', )