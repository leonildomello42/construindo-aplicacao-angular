

class Spacecraft {

    constructor(public porpulsor: string){}

    jumpIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.porpulsor}`);
    } 
}

//Pode usar o export na declaracao tambem export interface Containership
interface Containership {
    
    cargoConteiners?: number;
}

export {Spacecraft, Containership}