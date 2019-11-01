import {money, sumSponsors, eu} from './money';
import {employersNames} from './employers';

class MakeBusiness{
    constructor(owner, director, cash, emp) {
        this.owner = owner;
        this.director = director;
        this.cash = cash;
        this.emp = emp;
    }

    conclusion() {
        console.log(`We have a business. Owner: ${this.owner} , director: ${this.director} . Our budget: ${this.cash} . And our employers: ${this.emp}
    And we have a sponsors: ${sumSponsors}
    Note. Be careful with ${eu[0]}. It's a huge risk.`);
    }
}

const makeBusiness = new MakeBusiness('Sam', 'Victor', money, employersNames);
makeBusiness.conclusion();