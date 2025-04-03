import pool from "../db/db.js";

// Todo de aqui en adelante viene desde la BD

// Obtiene todos los usuarios
export const getAllPosts = async () => {
  try {
    const result = await pool.query("SELECT * FROM posts");
    return result.rows;
  } catch (error) {
    console.error("❌ Error en la consulta de GET:", error.message);
    throw error;
  }
};

export const insertPost = async (titulo, img, descripcion) => {
  try {
    const result = await pool.query(
      "INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *",
      [titulo, img, descripcion]
    );
    return result.rows[0];
  } catch (error) {
    console.error("❌ Error en la consulta de POST:", error.message);
    throw error;
  }
};
