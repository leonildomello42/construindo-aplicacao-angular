import { Containership, Spacecraft } from "./base-ships";


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

export {MilleniumFalcon}