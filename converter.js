// Set as worker class

//const { bigIntLiteral } = require("@babel/types");


export function convert(type, amount, ingr) {
	let i = eval(ingr);
switch (type) {
	case 'tspGram' :
		return amount * i.tspGram;
		break;
	case 'tbspGram' :
		return amount * i.tbsGram;
		break;
	case 'cupGram' :
		return amount * i.cupGram;
		break;
	case 'tspOunce' :
		return amount * i.tspOunce;
		break;
	case 'tbspOunce' :
		return amount * i.tbsOunce;
		break;
	case 'cupOunce' :
		return amount * i.cupOunce;
		break;
	case 'gram' :
		break;
	case 'ounce' :
		break;
}
}

class Ingredient {
	constructor(name, tspGram, tbsGram, cupGram, tspOunce, tbsOunce, cupOunce) {
		this.name = name;
		this.tspGram = tspGram;
		this.tbsGram = tbsGram;
		this.cupGram = cupGram;
		this.tspOunce = tspOunce;
		this.tbsOunce = tbsOunce;
		this.cupOunce	= cupOunce;
	}
}
//create support function that changes weight to volume
// 3 grams & under returns teaspoon measurement, 100 grams + returns cup measurement, etc.
// Every item would need a diff function or switch because weight varies so much
// Create multiple const with the amount 1 tsp = x grams for butter etc. ???
// OR create an Object of Butter that holds that data inside.

export function convertWeight(weight, type) {
	//used to convert grams to ounches or vice versa
	if (type === 'gram') {
		return weight * 0.035274;
	} else {
		return weight / 0.035274;
	}
}

const flour = new Ingredient('All Purpose Flour', 2.6, 8, 120, 0.09, 0.28, 4.23);
const breadFlour = new Ingredient('Bread Flour', 2.65, 8, 120, 0.09, 0.28, 4.23);
const water = new Ingredient('Water', 5, 15, 240, 0.17, 0.5, 8.46);
const bakingPowder = new Ingredient('Baking Powder', 4, 14.4, 230, 0.14, 0.5, 8.1);
const bakingSoda = new Ingredient('Baking Soda', 5, 14.4, 230, 0.17, 0.5, 8.1);
const butter = new Ingredient('Butter', 4.7, 14, 227, 0.16, 0.5, 8);
const salt = new Ingredient('Salt', 5, 15, 288, 0.18, 0.5, 10.1);
const oil = new Ingredient('Oil', 4.67, 14, 224, 0.16, 0.06, 7.9);
const milk = new Ingredient('Milk', 5, 15.25, 244, 0.18, 0.54, 8.6);
const yeast = new Ingredient('Yeast', 3.33, 10, 160, 0.12, 0.35, 5.6);

