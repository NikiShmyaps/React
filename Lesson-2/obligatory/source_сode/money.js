let sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};
    
const {cash, eu, rus} = sponsors;
    
const calcCash = (cash = 0) => cash.reduce((a, b) => a + b);

let money = calcCash(cash);
    
const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];

export {money, sumSponsors, eu};