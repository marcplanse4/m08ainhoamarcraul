/**
* Clase Producto
*/
class Producto {
  /*
  * Crea un constructor con 3 parámetros, de los cuáles son nombre, precio y cantidad.
  * Para cada parámetro le añade el valor correspondiente, siempre señalando el objeto actual
*/
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  /*Función que calcula el precio total, y devuelve el resultado de dicho cálculo*/
  calcularTotal() {
    return this.precio * this.cantidad;
  }
}

/**
 * Clase Carrito.
 */
class Carrito {
  /**
   * Constructor de la clase Carrito.
   * Inicializa un array vacio para almacenar productos.
   */
  constructor() {
    this.productos = [];
  }

  /**
   * Agrega un producto al carrito.
   * 
   * @param {Object} producto - El producto a agregar.
   */
  agregarProducto(producto) {
    this.productos.push(producto);
  }

  /**
   * Calcula el total del carrito sumando el total de cada producto.
   * 
   * @return {number} El total del carrito.
   */
  calcularTotalCarrito() {
    return this.productos.reduce((total, producto) => total + producto.calcularTotal(), 0);
  }

  /**
   * Vacia el carrito, eliminando todos los productos.
   */
  vaciarCarrito() {
    this.productos = [];
  }
}

/**
 * Clase Usuario.
 */
class Usuario {
  /**
   * Constructor de la clase Usuario.
   * 
   * @param {string} nombre - El nombre del usuario.
   * @param {string} correo - El correo electrónico del usuario.
   */
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
    this.carrito = new Carrito();
  }

  /**
   * Agrega un producto al carrito del usuario.
   * 
   * @param {Object} producto - El producto a agregar al carrito.
   */
  agregarProductoAlCarrito(producto) {
    this.carrito.agregarProducto(producto);
  }

  /**
   * Finaliza la compra y muestra el total en la consola.
   */
  finalizarCompra() {
    const total = this.carrito.calcularTotalCarrito();
    console.log(`Usuario ${this.nombre} ha realizado una compra por un total de ${total}€`);
    this.carrito.vaciarCarrito();
  }
}



const producto1 = new Producto("Laptop", 1200, 1);
const producto2 = new Producto("Mouse", 20, 2);

const usuario = new Usuario("Juan", "juan@example.com");

usuario.agregarProductoAlCarrito(producto1);
usuario.agregarProductoAlCarrito(producto2);

usuario.finalizarCompra();
