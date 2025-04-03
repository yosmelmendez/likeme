import pkg from "pg";
import dotenv from "dotenv";

dotenv.config(); // Cargar variables de entorno

const { Pool } = pkg;

// configurar la conexion

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  allowExitOnIdle: true, // cierra la conexion despues de cada operacion
});

pool
  .connect()
  .then(() => console.log("✅ Conexión exitosa a PostgreSQL"))
  .catch((err) =>
    console.error("❌ Error de conexión a PostgreSQL:", err.message)
  );

export default pool;
