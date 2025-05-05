function init(){
    var card = document.getElementById("card1")
    card = card.innerHTML=
    `
    <div>
        <h1> Esta es la tarjeta del primer producto </h1>
        <h2 id="ProductoB">Producto B:</h2>
        <input type="number" id="cantidad">
        <button onclick="agregarcarrito()" type="button" class="btn btn-success boton">Añadir</button>
    </div>
    `
}
function agregarcarrito(){
    var cantidad = document.getElementById("cantidad").value
    var nombre = document.getElementById("ProductoB")
    var carrito = document.getElementById("carrito")
    carrito = carrito.innerHTML=
    `
    <h1>Producto: ${nombre} - Cantidad: ${cantidad}</h1>
    `
}