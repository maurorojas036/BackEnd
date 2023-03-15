// Tipos de datos
var mensaje = "Hola mundo";
var edad = 23;
edad = 31;
var pi = 3.13;
var a = "apple";
var activo = true;
alert('Hi Mauro');
//Ejercicios Clase 2
//Define una función que tome dos parámetros de tipo number y devuelva la suma de ambos.
var suma = function (a, b) { return a + b; };
//Define una función que tome un parámetro de tipo string y devuelva el número de caracteres que contiene.
var contador = function (cadena) { return cadena.length; };
//Define una función que tome un parámetro de tipo string y 
//devuelva el mismo string pero con todas las letras en mayúscula.
var conversorMayuscula = function (cadena) { return cadena.toLocaleUpperCase(); };
//Define una función que tome un arreglo de números y devuelva la suma de todos los elementos.
var sumArray = function (a) {
    var sum = 0;
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var pos = a_1[_i];
        sum += pos;
    }
    return sum;
};
console.log(sumArray([1, 3, 4, 6, 7, 8, 9]));
var sum = function (a) {
    debugger;
    return a.reduce(function (x, y) { return x + y; }, 0);
};
console.log(sum([1, 3, 4, 6, 7, 8, 9]));
//Define una función que tome un arreglo de objetos de tipo Persona y 
//devuelva un nuevo arreglo con solo los nombres de cada persona.
var personas = [{
        name: "Juan",
        apellido: "Perez"
    },
    {
        name: "Mauro",
        apellido: "Perez"
    },
    {
        name: "Pedro",
        apellido: "Perez"
    }];
var Nombres = function (personas) {
    return personas.map(function (person) { return person.name; });
};
console.log(Nombres(personas));
// Define una función que tome dos parámetros: un arreglo de números y un número de referencia.
//  La función debe devolver un nuevo arreglo que contenga solo los números del arreglo original que sean mayores que el número de referencia.
var mayorque = function (array, numero) {
    return array.filter(function (value) { return value > numero; });
};
console.log(mayorque([2, 3, 5, 6, 2, 8, 3, 9, 5, 4], 3));
