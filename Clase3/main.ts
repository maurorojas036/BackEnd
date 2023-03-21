// //Clase3 -> clases, objetos e instancias. 

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
    class Producto{
        //Declaro las propiedades de la clase
        nombre: string;
        precio: number;
        cantidad: number;

        //Genero el constructor de la clase
        constructor(nombre:string, precio:number, cantidad:number){
            this.nombre = nombre,
            this.precio = precio,
            this.cantidad = cantidad
        }

    }  

    //Declaro un objeto del tipo Producto
    const producto1 = new Producto("mouse",2000,1);

    console.log(`El producto ${producto1.nombre} cuesta ${producto1.precio} pesos y nos quedan ${producto1.cantidad}`);



/**Crea una clase llamada "Persona" que tenga las siguientes propiedades: "nombre", "edad" y "profesión". 
 * El constructor de la clase debe recibir como parámetros el nombre y la edad, y la propiedad "profesión" 
 * debe inicializarse con un valor por defecto de "Desconocido". Luego, crea un objeto a partir de la clase "Persona"
 *  y muestra en consola sus propiedades.
 */
class Persona{
    //Propiedades
    nombre: string;
    edad:   number;
    profesion: string;

    //Constructor
    constructor(nombre:string, edad:number, profesion:string = "Desconocido"){
        this.nombre= nombre,
        this.edad = edad,
        this.profesion = profesion
    }
}

//Creo el objeto
const persona= new Persona("Mauro",31);

console.log(`Mi nombre es ${persona.nombre} y tengo ${persona.edad} años, mi profesion es: ${persona.profesion}`)



/**Crea una clase llamada "Animal" que tenga la propiedad "nombre" y el método "mover".
 *  Luego, crea una subclase llamada "Perro" que herede de la clase "Animal" y tenga un método adicional llamado "ladrar".
 *  Crea un objeto a partir de la clase "Perro" y muestra en consola su nombre y que está moviéndose y ladrando.
 */
class Animal{
    //Propiedades
    nombre:string;

    //Constructor
    constructor(nombre:string){
        this.nombre = nombre
    }

    //Método
    mover(){
        console.log("Me estoy moviendo....")
    }
}

class Perro extends Animal{
    //Método
    ladrar(){
        console.log("guau guau!!!")
    }
}

const perro = new Perro("Firulai");
perro.mover();
perro.ladrar();


/**
 * Para hacer esto, deberás crear una clase llamada "Empleado" con las siguientes propiedades:
 *  "nombre", "edad", "salario" y "departamento". Luego, deberás crear una subclase llamada 
 * "Gerente" que herede de la clase "Empleado" y tenga una propiedad adicional llamada "equipo"
 *  (un arreglo de objetos "Empleado"). Agrega un método llamado "calcularSalarioTotal" que calcule 
 * el salario total del gerente y su equipo a partir de los salarios de cada empleado, y un método llamado
 *  "agregarEmpleado" que permita agregar un nuevo empleado al equipo del gerente.
 */

class Empleado{
    //declaro las propiedades
    nombre: string;
    edad: number;
    salario: number;
    departamento: string;


    //declaro el constructor
    constructor(nombre: string, edad: number, salario: number, departamento: string){
        this.nombre = nombre,
        this.edad = edad,
        this.salario = salario,
        this.departamento = departamento
    }


    //declaro los métodos
    calcularSalario(): number{
        return this.salario;
    }
}

//Genero la clase gerente
class Gerente extends Empleado{
    empleados: Empleado[];

    constructor(nombre: string, edad: number, salario: number, departamento: string, empleados:Empleado[]){
        super(nombre,edad,salario,departamento)

        this.empleados = empleados;
    
    }

    //genero los métodos
    calcularSalarioTotal():number{
        let salarioTotal = super.calcularSalario();

        console.log(salarioTotal);
        
        for (const empleado of this.empleados) {
            salarioTotal += empleado.calcularSalario();
        }

        return salarioTotal;
    }

    agregarEmpleado(empleado:Empleado):void{
        this.empleados.push(empleado)
    }
}


let empleado1 = new Empleado("Juan",30,3000,"Venta");
let empleado2 = new Empleado("Pedro",42,3500,"Venta");
let empleado3 = new Empleado("Andres",22,31,"Venta");



let gerente = new Gerente("Pepe",45,8000,"Venta",[empleado1,empleado2]);

console.log(gerente.calcularSalarioTotal())