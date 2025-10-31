import ProductoService from "../modulos/producto.service.js";

document.addEventListener('DOMContentLoaded', async function () {
    const form = document.getElementById("product-form");
    const nameInput = document.getElementById('name');
    const priceInput = document.getElementById('price');
    const quantityInput = document.getElementById('quantity');
    const saveButton = document.getElementById('save-product');

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        let product = await ProductoService.getProductById(productId);

        nameInput.value = product.nombre;
        priceInput.value = product.precio;
        quantityInput.value = product.cantidad;

    }

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const name = nameInput.value;
        const price = priceInput.value;
        const quantity = parseInt(quantityInput.value, 10);

        if (name && price && quantity) {
            const productData = {
                nombre: name,
                precio: price,
                cantidad: quantity
            };

            if (productId) {
                try {
                    await ProductoService.editProduct(productId, productData);

                    alert("Producto actualizado con éxito.");
                    window.location.href = "producto.html";
                } catch (error) {
                    alert("Ocurrió un error al editar el producto.");
                }
            } else {
                try {
                    await ProductoService.addProducto(productData);

                    alert("Producto agregado con éxito.");
                    window.location.href = "producto.html";
                } catch (error) {
                    alert("Ocurrió un error al agregar el producto.");
                }
            }

        }
        else {
            //aqui se agregan las validadciones de colores, que se vean errores y cosas así
            alert('Por favor ingrese todos los datos del producto')
        }


    })
})