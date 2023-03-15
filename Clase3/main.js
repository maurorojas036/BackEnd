// //Clase3 -> clases, objetos e instancias. 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class Persona{
//     //Declaro las propiedades de la clase
//     nombre : string;
//     edad: number ;
//     calle: string;
//     //Genero el constructor
//     constructor(nombre:string, edad:number, calle:string){
//         this.nombre = nombre,
//         this.edad = edad,
//         this.calle = calle
//     }
//     //Declaro los metodos
//     saludar(){
//         console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años`)
//     } 
//     caminar(){
//         console.log(`${this.nombre} va caminando hacia la calle ${this.calle}`)
//     }
// }
// //Declaro los objetos de tipo persona
// const persona1 = new Persona("Juan", 45, "Belgrano 2009");
// const persona2 = new Persona("Pepe", 36, "Repetto 3230");
// //Instancio los metodos de la clase
// persona1.saludar();
// persona1.caminar();
// persona2.saludar();
// persona2.caminar();
// // Genero otra clase para mostrar el tema de Herencia
// class Vehiculo{
//     marca:  string;
//     modelo: string;
//     anio:   number;
//     color:  string;
//     constructor(marca: string, modelo:string, anio:number, color:string){
//         this.marca = marca,
//         this.modelo = modelo,
//         this.anio = anio,
//         this.color = color
//     }
//     mostrarDetalles(){
//         console.log(`marca: ${this.marca}, modelo:${this.modelo}, color:${this.color}`)
//     }
// }
// class Coche extends Vehiculo{
//     acelerar(){
//         console.log("Acelerando...")
//     }
// }
// class Moto extends Vehiculo{
//     frenar(){
//         console.log("Frenando...")
//     }
// }
// class Bicicleta extends Vehiculo{
//     pedalear(){
//         console.log("Pedaleando...")
//     }
// }
// //Creo los objetos
// const moto = new Moto("Bajaj","Rouser",2023,"negro");
// moto.mostrarDetalles()
// moto.frenar();
// const bicicleta = new Bicicleta("Zenit","xxxx",2021,"rojo");
// bicicleta.mostrarDetalles();
// bicicleta.pedalear();
// const auto = new Coche("Ford", "Mustang",2022, "gris");
// auto.mostrarDetalles();
// auto.acelerar()
///Ejercicio 1
// class Producto{
//     //Declaro las propiedades del producto
//     nombre:     string;
//     precio:     number;
//     cantidad:   number;
//     //Declaro el constructor de la clase
//     constructor(nombre:string, precio:number, cantidad:number){
//         this.nombre = nombre,
//         this.precio = precio,
//         this.cantidad = cantidad
//     }
// }
// //Defino la clase pedido
// class Pedido{
//     //Declaro las propiedades
//     id: number;
//     fecha: Date;
//     total: number;
//     productos: Producto[];
//     //declaro el constructor de la clase
//     constructor(id:number, fecha:Date, productos: Producto[]){
//         this.id = id,
//         this.fecha = fecha,
//         this.productos = productos
//         //Calculamos el total del pedido al crear el objeto
//         this.total = this.calcularTotal();
//     }
//     //Metodo para calcular el total del pedido
//     calcularTotal(): number{
//         let suma = 0;
//         for (const producto of this.productos) {
//             suma += (producto.precio * producto.cantidad)
//         }    
//         return suma
//     }
//     //Metodo para agregar un producto
//     agregarProducto(producto:Producto){
//         this.productos.push(producto);
//         this.total = this.calcularTotal();
//     }
// }
// //Creamos los productos
// const producto1 = new Producto("Cartuchera",1200,2);
// const producto2 = new Producto("libro",1700,3);
// const producto3 = new Producto("Mochila",3000,1);
// //Creamos un objeto del tipo pedido
// const pedido1 = new Pedido(1,new Date(),[producto1,producto2]);
// pedido1.agregarProducto(producto3)
// console.log(`El total del pedido es: $${pedido1.total}`)
// console.log(`El pedido contiene los siguientes productos`)
// pedido1.productos.forEach(element => console.log(element.nombre))
//Ejercicios Practica 21hs
/**1: Clases y Objetos
 *  Crea una clase llamada "Producto" que tenga las siguientes propiedades: "nombre", "precio" y "cantidad".
 * Luego, crea un objeto a partir de la clase "Producto" y muestra en consola el nombre del producto y su precio.
 */
var Producto = /** @class */ (function () {
    //Genero el constructor de la clase
    function Producto(nombre, precio, cantidad) {
        this.nombre = nombre,
            this.precio = precio,
            this.cantidad = cantidad;
    }
    return Producto;
}());
//Declaro un objeto del tipo Producto
var producto1 = new Producto("mouse", 2000, 1);
console.log("El producto ".concat(producto1.nombre, " cuesta ").concat(producto1.precio, " pesos y nos quedan ").concat(producto1.cantidad));
/**Crea una clase llamada "Persona" que tenga las siguientes propiedades: "nombre", "edad" y "profesión".
 * El constructor de la clase debe recibir como parámetros el nombre y la edad, y la propiedad "profesión"
 * debe inicializarse con un valor por defecto de "Desconocido". Luego, crea un objeto a partir de la clase "Persona"
 *  y muestra en consola sus propiedades.
 */
var Persona = /** @class */ (function () {
    //Constructor
    function Persona(nombre, edad, profesion) {
        if (profesion === void 0) { profesion = "Desconocido"; }
        this.nombre = nombre,
            this.edad = edad,
            this.profesion = profesion;
    }
    return Persona;
}());
//Creo el objeto
var persona = new Persona("Mauro", 31);
console.log("Mi nombre es ".concat(persona.nombre, " y tengo ").concat(persona.edad, " a\u00F1os, mi profesion es: ").concat(persona.profesion));
/**Crea una clase llamada "Animal" que tenga la propiedad "nombre" y el método "mover".
 *  Luego, crea una subclase llamada "Perro" que herede de la clase "Animal" y tenga un método adicional llamado "ladrar".
 *  Crea un objeto a partir de la clase "Perro" y muestra en consola su nombre y que está moviéndose y ladrando.
 */
var Animal = /** @class */ (function () {
    //Constructor
    function Animal(nombre) {
        this.nombre = nombre;
    }
    //Método
    Animal.prototype.mover = function () {
        console.log("Me estoy moviendo....");
    };
    return Animal;
}());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //Método
    Perro.prototype.ladrar = function () {
        console.log("guau guau!!!");
    };
    return Perro;
}(Animal));
var perro = new Perro("Firulai");
perro.mover();
perro.ladrar();
