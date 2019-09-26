console.log('worked')
const amount = 3051;

const percentBonus = 0.1;

const unaccounted = 1000

const bonuses = (amount - (amount % unaccounted)) * percentBonus;

console.log(bonuses)