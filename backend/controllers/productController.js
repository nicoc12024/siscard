// productController.js
import express from "express";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/productService.js";

const router = express.Router(); // Define 'router' usando express.Router()

router.get("/", async (req, res) => {
  try {
    await getAllProducts();
    res.status(201).json({ message: "Lista de productos" });
  } catch (err) {
    res.status(500).json({ error: "Error al obtener los productos" });
  }
});

router.post("/", async (req, res) => {
  try {
    const product = req.body;

    // Validación básica
    if (!product.name) {
      return res.status(400).json({ error: "El campo 'name' es obligatorio" });
    }
    await createProduct(product);
    res.status(201).json({ message: "Producto añadido exitosamente" });
  } catch (err) {
    res.status(500).json({ error: "Error al crear el producto" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await deleteProduct(id);
    // Verificar si se eliminó alguna fila
    if (result.rowsAffected[0] > 0) {
      res.status(200).json({ message: "Producto eliminado exitosamente" });
    } else {
      res.status(404).json({ message: "Producto no encontrado" });
    }
  } catch (err) {
    res.status(500).json({ error: "Error al eliminar producto" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = req.body;

    // Validación básica
    if (!product.name) {
      return res.status(400).json({ error: "El campo 'name' es obligatorio" });
    }
    await updateProduct(id, product);
    res.status(201).json({ message: "Producto modificado exitosamente" });
  } catch (err) {
    res.status(500).json({ error: "Error al actualizar producto" });
  }
});

export default router;
