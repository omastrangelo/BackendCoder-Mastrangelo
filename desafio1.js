//Clase Product Manager
class ProductManager {

    //Funcion constructora para la creacion.
    constructor() {
        this.products = [];
    }

    //id que solo se incrementa cuando se añade un producto.
    static generateId = 1;

    //Metodo añadir producto
    addProduct(product) {
        const productRepeated = this.products.find(element => element.code === product.code);
        if(productRepeated) return "Producto ya añadido";
        product.id = ProductManager.generateId ++;
        this.products.push(product);
    }

    //Metodo para obtener todos los productos
    getProducts() {
        return this.products;
    }
    //Metodo para obtener un producto por el id.
    getProductById(id) {
        const productFounded = this.products.find(product => product.id === id);
        if(productFounded)return productFounded
        return "Producto no encontrado."
    }
}

//Creamos el objeto Product Manager.
var productManager = new ProductManager()

//Printeamos por consola el array vacio
console.log("Array vacio" + productManager.getProducts())

//Agregamos un producto a la lista de productos de product manager.
const p1 = {
    title: "Teclado nro 1",
    description: "teclado cableado",
    price: 2000,
    code: "1S",
    stock: 5
}
productManager.addProduct(p1)

//Añadimos otro producto a product manager.
const p2 = {
    title: "Teclado nro 2",
    description: "teclado inalambrico",
    price: 1500,
    code: "1F",
    stock: 2
}
productManager.addProduct(p2)

//Probamos añadir un producto con el mismo code que otro, pero con las otras propiedades diferentes
const p3 = {
    title: "mouse gamer",
    description: "mouse gamer de alto rendimiento",
    price: 500,
    code: "1F",
    stock: 10
}
//Nos printea "Product already added."
console.log(productManager.addProduct(p3))

//Printeamos por consola el metodo getProducts que nos devuelve los productos ya cargados.
console.log(productManager.getProducts())

//Printeamos el producto buscado por su ID.
console.log("Producto buscado por su id: \n",productManager.getProductById(1))