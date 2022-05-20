

export function adjustHydration(flour, hydration, leaven) {
	let hydrationDec = hydration / 100;

	let salt = flour * 0.02;
	salt = Math.round(salt * 10) / 10;
	let leavenHydra = leaven / 2;
	if (leaven === '0'){
		let water = flour * hydrationDec;
		water = Math.round(water * 10) / 10;
		return [flour, water, salt, hydration, 0];
	} else {
		let water = (flour * hydrationDec) - leavenHydra;
		water = Math.round(water * 10) / 10;
		return [flour, water, salt, hydration, leaven];
	}
}
//assume leaven is 100% hydration so adding 50% to flour
//and 50% to the hydration level

export function adjustWater(flour, water, leaven) {
	let salt = flour * 0.02;
	salt = Math.round(salt * 10) / 10;
	let leavenHydra = leaven / 2;
	if (leaven !== 0 || ''){
		let hydration = ((water / flour) + (leavenHydra / flour)) * 100;
		hydration = Math.round(hydration * 10) / 10;
		return [flour, hydration, salt, leaven];

	} else {
		let hydration = (water / flour) * 100;
		hydration = Math.round(hydration * 10) / 10;
		return [flour, hydration, salt];
	}
}

