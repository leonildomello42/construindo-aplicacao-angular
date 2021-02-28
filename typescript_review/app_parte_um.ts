
// 1-Declaracao_variaveis

let variavel: number;

let message: string = "Help-me, Obi-Wan Kenobi. You're my only hope!";
console.log(message);

let episode: number = 4;

//episode = "leo"
console.log("This is episode " + 4);

episode = episode + 1;
console.log("Next episode is " + episode);

//Desaconselhado pois gera confusao string e number
let favoriteDroid;
favoriteDroid = "BB-8";
favoriteDroid = 10;
console.log("My favorite doird is " + favoriteDroid);

//--------------------------------------------------------------------


// 2 - Funcoes
let isEnoughToBeatMf = function (parsecs: number): boolean{
    
    return parsecs < 12;
}
let distance = 11;

console.log(`Is ${distance} parsecs enough to beat Millenion Falcon? ${isEnoughToBeatMf(distance) ? 'YES' : 'NO'}`);


//Arrow
let call = (name: string) => console.log(`Do you copy, ${name}?`);
call('R2');



//Parametros padroes
function inc (speed: number, inc: number = 1): number {

    return speed + inc;
}

console.log(`inc (5, 1) = ${inc(5, 1)}`)
console.log(`inc (5) = ${inc(5)}`)

//-----------------------------------------------------------------------



