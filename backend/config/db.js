import { connect } from "mssql";
import dotenv from "dotenv";

dotenv.config();

const dbConfig = {
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: process.env.DB_ENCRYPT === "true",
    trustServerCertificate: process.env.DB_TRUSTSERVERCERTIFICATE === "true",
  },
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT, 10),
};

async function connectToDb() {
  try {
    const pool = connect(dbConfig);
    return pool;
  } catch (err) {
    throw err;
  }
}

export default { connectToDb };
