import ProductoService from "../modulos/producto.service";

document.addEventListener('DOMContentLoaded', async function () {
    const form = document.getElementById("product-form");
    const nameInput = document.getElementById('name');
    const priceInput = document.getElementById('price');
    const quantityInput = document.getAnimations('quantity');
    const saveButton = document.getElementById('save-product');

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        let product = ProductoService.getProducts;

        nameInput.value = product.nombre;
        priceInput.value = product.precio;
        quantityInput.value = product.cantidad;

    }

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const name = nameInput.value;
        const price = priceInput.value;
        const cantidad = quantityInput.value;

        if (name && price && cantidad) {
            const productData = {
                nombre: name,
                precio: price,
                cantidad: cantidad
            };

            if (productId) {
                try {
                    await fetch(`http://127.0.0.1:300/api/productos/${productId}`, {
                        method: 'PUT',
                        headers: {
                            "content-Type": "application/json"
                        },

                        body: JSON.stringify(productData)
                    })
                    alert('Producto actualizado conexito')
                    window.location.href = "producto.html";

                } catch (error) {
                    alert('Ocurrio un error al editar el producto')
                }
            }
            else {
                //aqui se agregan las validadciones de colores, que se vean errores y cosas así
                alert('Por favor ingrese todos los datos del producto')
            }
        }


    })
})