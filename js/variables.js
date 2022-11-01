const stockProductos = [
        {
                id: 1, sabor: "Muzzarella", precio: 900, descripcion: "Un clásico, con el mejor queso muzzarella y orégano.", foto: "./imagenes/muzza.jpg"
        },
        {
                id: 2, sabor: "Napolitana", precio: 1300, descripcion: "La especialidad de la casa. Con tomates cosechados en casa, y una salsita con mucho ajo", foto: "./imagenes/napo.jpeg"
        },

        {
                id: 3, sabor: "Fugazzeta", precio: 850, descripcion: "Otra opción de las más pedidas. Queso y cebolla, bien simple, pero no por eso menos rica", foto: "./imagenes/fugazza.jpg"
        },
        {
                id: 4, sabor: "Cantimpalo", precio: 1650, descripcion: "Hecha con muzzarella y cantimpalo de primera calidad, de estilo español", foto: "./imagenes/canti.jpg"
        },
        {
                id: 5, sabor: "Jamón y Morrones", precio: 1400, descripcion: "Muzzarella, jamón cocido de primera y morrones cosechados en casa", foto: "./imagenes/jamonymorrones.jpg"
        },
        {
                id: 6, sabor: "Mediterranea", precio: 1900, descripcion: "Muzzarella, rúcula, jamón crudo español, una lluviecita de queso parmesano y aceitunas negras. Una bomba!", foto: "./imagenes/ruculaycrudo.jpg"
        },
        {
                id: 7, sabor: "Carne", precio: 220, descripcion: "Las mejores del condado, con carne de primera, aceitunas, cebolla y papa. Bien jugosas. Una delicia!", foto: "./imagenes/empacarne.jpg"
        },
        {
                id: 8, sabor: "Jamón y queso", precio: 180, descripcion: "Jamón y muzzarella de primera!", foto: "./imagenes/empajamonyqueso.jpg"
        },
        {
                id: 9, sabor: "Cheeseburger", precio: 200, descripcion: "Para todas las edades. Una hamburguesa metida adentro de una empanada. Queso cheddar y carne picada. Irresistible", foto: "./imagenes/empacheeseburger.jpg"
        },
        {
                id: 10, sabor: "Bondiola", precio: 200, descripcion: "Bondiola ahumada hecha a la parrilla, con zanahoria, cebolla y un poquito de provoleta fundida", foto: "./imagenes/empabondio.png"
        },
        {
                id: 11, sabor: "Humita", precio: 180, descripcion: "Las clásicas de choclo y salsa blanca", foto: "./imagenes/empahumita.jpg"
        },
        {
                id: 12, sabor: "Verdura", precio: 180, descripcion: "Nuestra opción vegetariana junto con las de humita. Con un poquito de queso muzzarella, un manjar!", foto: "./imagenes/empaverdura.jpg"
        },
        {
                id: 13, sabor: "Carne a cuchillo", precio: 230, descripcion: "Carne de primera, braseada, cortada a cuchillo. Con morron, cebolla. Un 10!", foto: "./imagenes/empacarnecuchillo.jpg"
        },
        {
                id: 14, sabor: "Cuatro quesos", precio: 220, descripcion: "Provolone, roquefort, gouda y parmesano.", foto: "./imagenes/empa4quesos.jpg"
        },
        {
                id: 15, sabor: "Panceta y roquefort", precio: 230, descripcion: "No te vas a arrepentir. Panceta ahumada, nuez y queso azul de primera!", foto: "./imagenes/emparoquejamon.jpg"
        },
];

const productos = stockProductos.map((prod)=>prod.sabor)
console.log(productos) 
const carrito = JSON.parse(localStorage.getItem("Carrito")) || []

const tarjetas = document.getElementById("tarjetas")
const divCarrito = document.getElementById("carrito")

function tarjetasProductos () {
        stockProductos.forEach((producto) => {
        tarjetas.innerHTML += `
        <div class="col">
                <div class= "card"
                        <div class="card-body">
                        <img src="${producto.foto}" class="card-img-top" alt="...">
                        <h2 class="card-title">
                                ${producto.sabor}
                        </h2>
                        <p class="card-text">
                                ${producto.descripcion}
                        </p>
                        <button id="btn${producto.id}" class="btn btn-primary ">
                                Agregar al carrito:  $${producto.precio}
                        </button>
                        </div>
                </div>
        </div>
        `;
        });
        stockProductos.forEach((producto) => {
                document.getElementById(`btn${producto.id}`).addEventListener("click",function(){
        agregarAlCarrito(producto);
                });
        });
}

tarjetasProductos();

function agregarAlCarrito(producto) {
        let existe = carrito.some((productoSome)=> productoSome.id === producto.id);
        if (existe === false) {
                producto.cantidad = 1;
                carrito.push(producto);
        }else{
                let findProd = carrito.find((findProducto) => findProducto.id === producto.id);
                findProd.cantidad++
        }
        alert("Has agregado al carrito " +producto.sabor)
        let carritoAlmacenado = JSON.stringify (carrito);
        localStorage.setItem("Carrito", carritoAlmacenado);
}

