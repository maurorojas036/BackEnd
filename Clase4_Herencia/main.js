/**
 * Crea una clase llamada "Libro" con las propiedades "título", "autor" y "precio".
 * Luego, crea una subclase llamada "LibroDigital" que herede de la clase "Libro" y
 *  tenga una propiedad adicional llamada "formato".
 * Agrega un método llamado "descargarLibro" que simule la descarga del libro en formato digital y muestre un mensaje en consola
 */
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
var Libro = /** @class */ (function () {
    //Genero el constructor
    function Libro(titulo, auto, precio) {
        this.titulo = titulo,
            this.auto = auto,
            this.precio = precio;
    }
    //Genero los métodos correspondientes a la clase
    Libro.prototype.getTitulo = function () {
        return this.titulo;
    };
    return Libro;
}());
//Clase LibroDigital Hereda las propiedades de Clase Libro
var LibroDigital = /** @class */ (function (_super) {
    __extends(LibroDigital, _super);
    //Genero el constructor
    function LibroDigital(titulo, auto, precio, formato) {
        var _this = _super.call(this, titulo, auto, precio) || this;
        _this.formato = formato;
        return _this;
    }
    //Genero los métodos correspondientes a la clase
    LibroDigital.prototype.descargarLibro = function () {
        console.log("El libro '".concat(_super.prototype.getTitulo.call(this), "' se esta descargando en formato ").concat(this.formato));
    };
    return LibroDigital;
}(Libro));
var libroDigital = new LibroDigital('Como hacerse millonario', 'Kiyosaki', 3500, 'digital');
libroDigital.descargarLibro();
/**
 * Tomando como referencia el punto anterior, se necesita desarrollar una aplicación que permita gestionar la información de una biblioteca.
 *  Para ello, se deberá crear una clase llamada "Libro" con las siguientes propiedades: "titulo", "autor", "editorial" y "numeroPaginas".
 *  Luego, se deberá crear una subclase llamada "Prestamo" que herede de la clase "Libro" y tenga una propiedad adicional llamada "fechaPrestamo".
 * Agrega un método llamado "calcularMulta" que calcule la multa a pagar por un préstamo atrasado en base a la fecha actual y la fechaPrestamo,
 *  y un método llamado "prestarLibro" que permita prestar un libro a un usuario. Finalmente, deberás crear un objeto a partir de la clase "Prestamo"
 *  y mostrar en consola la multa a pagar por el préstamo
 */
var Libro2 = /** @class */ (function () {
    //Constructor
    function Libro2(titulo, autor, editorial, numeroPaginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
        this.numeroPaginas = numeroPaginas;
    }
    return Libro2;
}());
var Prestamo = /** @class */ (function (_super) {
    __extends(Prestamo, _super);
    //Constructor
    function Prestamo(titulo, autor, editorial, numeroPaginas, fechaPrestamo) {
        var _this = _super.call(this, titulo, autor, editorial, numeroPaginas) || this;
        _this.fechaPrestamo = fechaPrestamo;
        return _this;
    }
    //Métodos
    Prestamo.prototype.calcularMulta = function () {
        if (this.fechaPrestamo != null) {
            var fechaHoy = new Date();
            return (fechaHoy.getDate() - this.fechaPrestamo.getDate()) * 100;
        }
        return 0;
    };
    return Prestamo;
}(Libro2));
var prestamo = new Prestamo('Como hacerse millonario', 'Kiyosaki', 'pepe', 200, new Date());
// new Date(2023,3,22)
console.log(prestamo.calcularMulta());
