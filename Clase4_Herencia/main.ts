/**
 * Crea una clase llamada "Libro" con las propiedades "título", "autor" y "precio". 
 * Luego, crea una subclase llamada "LibroDigital" que herede de la clase "Libro" y
 *  tenga una propiedad adicional llamada "formato". 
 * Agrega un método llamado "descargarLibro" que simule la descarga del libro en formato digital y muestre un mensaje en consola
 */

class Libro{
    //Creo las propiedades de la clase
    titulo: string;
    auto:   string;
    precio: number;

    //Genero el constructor
    constructor(titulo:string, auto:string, precio:number){
        this.titulo = titulo,
        this.auto   = auto,
        this.precio = precio
    }

    //Genero los métodos correspondientes a la clase
    getTitulo():string{
        return this.titulo;
    }

}


//Clase LibroDigital Hereda las propiedades de Clase Libro
class LibroDigital extends Libro{
    //Creo las propiedades de la clase
    formato:string;

    //Genero el constructor
    constructor(titulo:string, auto:string, precio:number, formato:string){
        super(titulo,auto,precio);
        this.formato = formato
    }

    //Genero los métodos correspondientes a la clase
    descargarLibro():void{
        console.log(`El libro '${super.getTitulo()}' se esta descargando en formato ${this.formato}`);
       
    }
}
const libroDigital = new LibroDigital('Como hacerse millonario','Kiyosaki', 3500,'digital');

libroDigital.descargarLibro();


/**
 * Tomando como referencia el punto anterior, se necesita desarrollar una aplicación que permita gestionar la información de una biblioteca.
 *  Para ello, se deberá crear una clase llamada "Libro" con las siguientes propiedades: "titulo", "autor", "editorial" y "numeroPaginas".
 *  Luego, se deberá crear una subclase llamada "Prestamo" que herede de la clase "Libro" y tenga una propiedad adicional llamada "fechaPrestamo". 
 * Agrega un método llamado "calcularMulta" que calcule la multa a pagar por un préstamo atrasado en base a la fecha actual y la fechaPrestamo,
 *  y un método llamado "prestarLibro" que permita prestar un libro a un usuario. Finalmente, deberás crear un objeto a partir de la clase "Prestamo"
 *  y mostrar en consola la multa a pagar por el préstamo
 */

class Libro2{
    //Propiedades
    titulo:string;
    autor:string;
    editorial: string;
    numeroPaginas: number;

    //Constructor
    constructor(titulo:string, autor:string, editorial:string, numeroPaginas:number){
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
        this.numeroPaginas = numeroPaginas;
    }

    //Métodos
}

class Prestamo extends Libro2{
    //Propiedades
    fechaPrestamo:Date;

    //Constructor
    constructor(titulo:string, autor:string, editorial:string, numeroPaginas:number, fechaPrestamo:Date){
        super(titulo, autor, editorial, numeroPaginas);
        this.fechaPrestamo = fechaPrestamo;
    }

    //Métodos
    calcularMulta():number{
        if(this.fechaPrestamo != null){
            const fechaHoy = new Date()   
            return (fechaHoy.getDate() - this.fechaPrestamo.getDate()) * 100;
        }

        return 0;
    }

    prestarLibro():void{
        this.fechaPrestamo = new Date();
    }
}



const prestamo = new Prestamo('Como hacerse millonario', 'Kiyosaki','pepe',200,new Date() );
// new Date(2023,3,22)
console.log(prestamo.calcularMulta())
