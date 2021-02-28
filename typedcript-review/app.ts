class Spacecraft {

    constructor(public porpulsor: string){}

    jumpIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.porpulsor}`);
    } 
}

let ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();

class MilleniumFalcon extends Spacecraft implements Containership{

    cargoConteiners: number;

    constructor(){
        super('hyperdrive');
        this.cargoConteiners = 2;
    }

    jumpIntoHyperspace(){

        if (Math.random() >= 0.5){
            super.jumpIntoHyperspace();
        }
        else{
            console.log('Failed to jump');
        }
    }
}

let falcon = new MilleniumFalcon();
falcon.jumpIntoHyperspace();

interface Containership {
    
    cargoConteiners?: number;
}

let goodForTheJoob = (ship: Containership) => ship.cargoConteiners > 2

console.log(`Is falcon good for the job? ${goodForTheJoob(falcon) ? 'Yes' : 'No'}`)