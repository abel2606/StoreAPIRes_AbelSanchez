import Producto from '../models/Producto.js';

class ProductoDAO {
    constructor() { }

    async crearProducto(productoData) {
        try {
            const producto = new Producto(productoData);
            return await producto.save();
        } catch (error) {
            throw error;
        }
    }

    async obtenerProductoPorId(id) {
        return await Producto.findById(id);
    }

    async obtenerProductoPorNombre(filtro) {
        return await Producto.find({ nombre: { $regex: filtro, $options: 'i' } });
    }
    async obtenerProductos(limit = 10) {
        return await Producto.find().limit(limit);
    }

    async actualizarProductoPorId(id, productoData) {
        return await Producto.findByIdAndUpdate(id, productoData, { new: true });
    }

    async eliminarProductoPorId(id) {
        try {
            return await Producto.findByIdAndDelete(id);

        } catch (error) {
            throw console.error("Error al eliminar el producto: ", error);
        }
    }
}

export default new ProductoDAO();

