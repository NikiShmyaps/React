let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter((employer) => {
    return employer.length > 0 && employer.length != ''
});

let answer = employersNames.map((item) => item.toLowerCase().trim());

let sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash, eu, rus} = sponsors;

function calcCash(own = 0) {
    let total = own;
    for (let i = 0; i < cash.length; i++) {
        total += cash[i];
    } 
    return total;
}

let money = calcCash(null, cash);

function makeBusiness({owner = 'Sam', director = 'Victor', cash = money, emp = employersNames}) {
    let sumSponsors = eu.concat(rus, 'unexpected sponsor');
    console.log(`We have a business. Owner: ${owner} , director: ${director} . Our budget: ${cash} . And our employers: ${emp}`);
    console.log(`And we have a sponsors: ${sumSponsors}`);
    console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
}
makeBusiness({cash:money, emp: employersNames});