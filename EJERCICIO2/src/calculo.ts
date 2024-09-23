export class calculo{
    private num_1: number = 0;
    private _num2: number = 0; 
 

constructor(num1: number, num2: number){
    this.num1 = num1;
    this.num2 = num2;
}


public get num1(): number {
    return this.num_1;
}
public set num1(value: number) {
    this.num_1 = value;
}
public get num2(): number {
    return this._num2;
}
public set num2(value: number) {
    this._num2 = value;
}

suma(num1: number, num2: number){
return `La suma de los numeros es de ${num1 + num2}`
}

resta(num1: number, num2: number){
    return `La resta de los numeros es de ${num1 - num2}`
    }

multiplicacion(num1: number, num2: number){
    return `La multiplicacion de los numeros es de ${num1 * num2}`
}

division(num1: number, num2: number){
    return `La division de los numeros es de ${num1 / num2}`
    }

potencia(num1: number, num2: number){
    return `Base: ${num1} Exponente: ${num2} El resultado es de ${Math.pow(num1,num2)}`
}

factorial(num1: number){
    let resultado: number = 1;

    for (let i = 1; i <= num1; i++) {
        resultado *= i;    
    }

    return `el resultado de facotorial de ${num1} es de ${resultado}`

}

}