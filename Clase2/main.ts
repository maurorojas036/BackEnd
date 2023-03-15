// Tipos de datos
let mensaje:string = "Hola mundo";
let edad: number = 23;
edad = 31;

const pi: number = 3.13;
let a: any = "apple";
let activo: boolean = true;

alert('Hi Mauro');

//Ejercicios Clase 2

//Define una función que tome dos parámetros de tipo number y devuelva la suma de ambos.
let suma = (a:number, b:number):number => a + b;

//Define una función que tome un parámetro de tipo string y devuelva el número de caracteres que contiene.
let contador = (cadena : string) => cadena.length;

//Define una función que tome un parámetro de tipo string y 
//devuelva el mismo string pero con todas las letras en mayúscula.
let conversorMayuscula = (cadena: string) => cadena.toLocaleUpperCase();

//Define una función que tome un arreglo de números y devuelva la suma de todos los elementos.
let sumArray = (a:number[]) => {
    let sum: number = 0;
    for (const pos of a) {
        sum += pos
    }
    return sum;
}
console.log(sumArray([1, 3, 4, 6, 7, 8, 9]));

let sum = (a:number[]) => { 
    debugger
    return a.reduce((x,y) => x + y ,0)
}
console.log(sum([1, 3, 4, 6, 7, 8, 9]));

//Define una función que tome un arreglo de objetos de tipo Persona y 
//devuelva un nuevo arreglo con solo los nombres de cada persona.
let personas :any[]= [{
        name:"Juan",
        apellido:"Perez"
    },
    {
        name:"Mauro",
        apellido:"Perez"
    },
    {
        name:"Pedro",
        apellido:"Perez"
    }];

let Nombres = (personas:any[]):string[] => { 
    return personas.map( person => person.name)
}

console.log(Nombres(personas))


// Define una función que tome dos parámetros: un arreglo de números y un número de referencia.
//  La función debe devolver un nuevo arreglo que contenga solo los números del arreglo original que sean mayores que el número de referencia.
let mayorque = (array: number[], numero:number) => {
    return array.filter(value => value > numero)
}

console.log(mayorque([2,3,5,6,2,8,3,9,5,4],3))