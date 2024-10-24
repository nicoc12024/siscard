// productService.js
import { VarChar, Text, Decimal, Int } from "mssql";
import { connectToDb } from "../config/db";

// Obtener todos los productos
async function getAllProducts() {
  const pool = await connectToDb();
  const result = await pool.request().query("SELECT * FROM Products");
  return result;
}

// Crear un producto
async function createProduct(product) {
  const { name, description = null, price = null, stock = null } = product;

  // Verificar que 'name' no sea null o vacío
  if (!name) {
    throw new Error("El campo 'name' es obligatorio.");
  }

  const pool = await connectToDb();
  const result = await pool
    .request()
    .input("name", VarChar, name)
    .input("description", Text, description)
    .input("price", Decimal, price)
    .input("stock", Int, stock)
    .query(
      "INSERT INTO Products (name, description, price, stock) VALUES (@name, @description, @price, @stock)"
    );
  return result;
}

// Actualizar un producto
async function updateProduct(productId, product) {
  const { name, description = null, price = null, stock = null } = product;

  // Verificar que 'name' no sea null o vacío
  if (!name) {
    throw new Error("El campo 'name' es obligatorio.");
  }

  const pool = await connectToDb();
  const result = await pool
    .request()
    .input("id", Int, productId)
    .input("name", VarChar, name)
    .input("description", Text, description)
    .input("price", Decimal, price)
    .input("stock", Int, stock)
    .query(
      "UPDATE Products SET name = @name, description = @description, price = @price, stock = @stock WHERE id = @id"
    );
  return result;
}

// Eliminar un producto
async function deleteProduct(productId) {
  const pool = await connectToDb();
  const result = await pool
    .request()
    .input("id", Int, productId)
    .query("DELETE FROM Products WHERE id = @id");
  return result;
}

export default {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};