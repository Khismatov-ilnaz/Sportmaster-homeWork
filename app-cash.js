console.log('worked')
const amount = 3051;

const bonuses = (amount - (amount % 1000)) / 10;

console.log(bonuses)