//import { doc } from 'prettier';
import { convert } from './converter.js';
import { adjustHydration, adjustWater, convertWeight } from './hydration-calc.js';
// Get user input from form

// Converter dom objects
const convertMenu = document.querySelector('#menuConverter');
const hydraMenu = document.querySelector('#menuHydra');
const hydraBody = document.querySelector(".hydration-calc");
const convertBody = document.querySelector(".main-body");
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
let saltHydration = document.querySelector('#saltHydraOutput');
let leavenHydration = document.querySelector('#leavenHydration');
//const gramHydraRadio = document.querySelector('#gramsHydra');
//const ounceHydraRadio = document.querySelector('#ouncesHydra');
let gramHydraWeight = true;
const hydraWeightOutput = document.querySelector('#weightOutput')

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

hydrationInput.addEventListener('change', () => { updateHydration() });
flourHydration.addEventListener('input', () => { updateHydration() });
leavenHydration.addEventListener('input', () => { updateHydration() });
waterHydration.addEventListener('input', () => { updateWater() });
weightHydra.addEventListener('click', () => { handleWeight() });
hydraMenu.addEventListener('click', (e) => {
	e.preventDefault();
	hydraBody.classList.remove('disp-none');
	hydraBody.classList.add('disp-block');
	convertBody.classList.remove('disp-block');
	convertBody.classList.add('disp-none');
})
convertMenu.addEventListener('click', (e) => {
	e.preventDefault();
	convertBody.classList.remove('disp-none');
	convertBody.classList.add('disp-block');
	hydraBody.classList.remove('disp-block');
	hydraBody.classList.add('disp-none');
})


function updateHydration() {
	console.log(`pre update ${hydrationInput.value}`)

	let updatedLevels = adjustHydration(flourHydration.value, hydrationInput.value, leavenHydration.value);
	console.log(updatedLevels);
	flourHydration.value = updatedLevels[0];
	waterHydration.value = updatedLevels[1];
	saltHydration.value = updatedLevels[2];
	hydrationInput.value = updatedLevels[3];
	leavenHydration.value = updatedLevels[4];
}

function updateWater() {
	let updatedLevels = adjustWater(flourHydration.value, waterHydration.value, leavenHydration.value);

	flourHydration.value = updatedLevels[0];
	hydrationInput.value = updatedLevels[1];
	saltHydration.value = updatedLevels[2];
	if(updatedLevels[3] !== null) {
		leavenHydration.value = updatedLevels[3];
	}
}


function handleWeight() {
	console.log('handleWeight is firing')
	/*
	if(type === true) {

		gramHydraRadio.removeEventListener('click', () => { handleWeight(gramHydraRadio.value) });
		ounceHydraRadio.addEventListener('click', () => { handleWeight(ounceHydraRadio.value) });
	} else {
		console.log('else is working')
		ounceHydraRadio.removeEventListener('click', () => { handleWeight(ounceHydraRadio.value) });
		gramHydraRadio.addEventListener('click', () => { handleWeight(gramHydraRadio.value) });
	}
	*/

	let ingredientsArr = [flourHydration.value, waterHydration.value, saltHydration.value, leavenHydration.value];
	let updatedIngredients = []
	for (let i = 0; i < ingredientsArr.length; i++) {
		updatedIngredients.push(convertWeight(ingredientsArr[i], gramHydraWeight));
	}
	flourHydration.value = updatedIngredients[0];
	waterHydration.value = updatedIngredients[1];
	saltHydration.value = updatedIngredients[2];
	leavenHydration.value = updatedIngredients[3];
	if ( gramHydraWeight === true ) {
		hydraWeightOutput.innerHTML = ''
		hydraWeightOutput.innerHTML = 'Ounces'
		gramHydraWeight = false;
	} else if ( gramHydraWeight === false ) {
		hydraWeightOutput.innerHTML = ''
		hydraWeightOutput.innerHTML = 'Grams'
		gramHydraWeight = true;
	}
	console.log(gramHydraWeight);
}

