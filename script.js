//Requerimos el archivo ProductManager.js para que podamos usar la clase.
const ProductManager = require('./ProductManager.js')
//Creamos el objeto que va a manipular todos los productos.
const productManager = new ProductManager("./products.txt")

//Funcion async para ejecutar todas las funciones que creamos en la clase.

const execute = async () => {
    //Printeamos array (vacio)
    console.log(await productManager.getProducts())

    //Añadimos un producto
    await productManager.addProduct({
        title: 'Teclado Gamer',
        description: 'Teclado Mecanico Gamer',
        price: 8000,
        code: '12S',
        stock: 5
    })

    //Añadimos otro producto.
    await productManager.addProduct({
        title: 'Celular Iphone',
        description: 'Modelo 13Pro max',
        price: 430000,
        code: '1323vd',
        stock: 1
    })

    //Printeamos productos.
    console.log(await productManager.getProducts())

    //Muestra el producto con ID=2
     console.log(await productManager.getProductById(2))

    //Borra el producto con id 1.
    await productManager.deleteProduct(1)

    //Printeamos productos.
    console.log(await productManager.getProducts())

    //Actualizamos producto con ID 2.
    await productManager.updateProduct(2,{
        price: 1500,
        stock: 10
    })

    //Printeamos productos.
    console.log(await productManager.getProducts())

    //Borra todos los productos
    await productManager.deleteAllProducts()

    //Printeamos los productos ya borrados (vacio)
    console.log(await productManager.getProducts())
}
execute()