const API_URL = "http://127.0.0.1:3000/api/productos";

export default class ProductoService {
    static getProducts() {
        return fetch(`${API_URL}`).then(response => response.json());
    }

    static getProductById(id) {
        return fetch(`${API_URL}/${id}`).then(response => response.json());
    }

    static addProducto(productData) {
        return fetch(API_URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productData)
        }).then(response => response.json());
    }

    static editProduct(id, productData) {
        return fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productData)
        }).then(response => response.json());
    }

    static deleteProduct(id) {
        return fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        }).then(response => response.json());
    }

    static async searchProducts(filter) {
        return await fetch(`${API_URL}/filtro/${filter}`).then(response => response.json());
    }
}