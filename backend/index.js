import express from "express";
import cors from "cors";
import { connectToDb } from "./config/db.js";
import productController from "./controllers/productController.js";

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

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
