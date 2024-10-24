// index.js
import express from "express";
import { json } from "body-parser";
import cors from "cors";
import { connectToDb } from "./config/db";
import productController from "./controllers/productController";

const app = express();
const port = 3000;

app.use(cors());

app.use(json());

connectToDb()
  .then(() => {
    app.use("/api/products", productController);

    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Error al conectar a la base de datos:", err);
  });
