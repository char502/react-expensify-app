
const isAdult = (age) => age >= 18;

const canDrink = (age) => age >= 18;

const isSenior = (age) => age >= 65;

// export default (age) => age >= 65;

export { isAdult, canDrink, isSenior as default };

// export const square = (x) => x * x;