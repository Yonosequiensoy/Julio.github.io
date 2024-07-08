document.addEventListener("DOMContentLoaded", () => {
    fetch('productos.json')
        .then(response => response.json())
        .then(data => cargarProductos(data));
});

function cargarProductos(productos) {
    const contenedor = document.getElementById('productos');
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto');
        
        const img = document.createElement('img');
        img.src = `images/${producto.imagen}`;
        
        const nombre = document.createElement('h2');
        nombre.textContent = producto.nombre;
        
        const precio = document.createElement('p');
        precio.textContent = `${producto.precio} bs`;
        
        div.appendChild(img);
        div.appendChild(nombre);
        div.appendChild(precio);
        
        contenedor.appendChild(div);
    });
}