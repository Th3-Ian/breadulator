

export function adjustHydration(flour, hydration, leaven) {
	let salt = flour * 0.02;
	let leavenHydra = leaven / 2;
	if (leaven !== 0 || ''){
		let water = (flour * hydration) - leavenHydra;
		console.log(`Flour is ${flour} grams, water is ${water} grams, leaven is ${leaven} grams, salt is ${salt} grams and the hydration level is ${hydration} percent`);

	} else {
		let water = flour * hydration;
		console.log(` bingbong Flour is ${flour} grams, water is ${water} grams, salt is ${salt} grams and the hydration level is ${hydration} percent`);

		// return value to main.js function that will add it to the dom
	}

}

//assume leaven is 100% hydration so adding 50% to flour
//and 50% to the hydration level


adjustHydration(400, .75, 30)