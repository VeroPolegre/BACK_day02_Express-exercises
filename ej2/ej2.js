const express = require("express");
const app = express();
const PORT = 8081;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/productos", (req, res) => {
  res.send("Listado de productos");
});

app.post("/productos", (req, res) => {
  res.send("Crear un producto " + req.body.name);
});

app.put("/productos", (req, res) => {
  res.send("Actualizar un producto " + req.body.name);
});

app.delete("/productos", (req, res) => {
  res.send("Borrar un producto");
});

app.get("/usuarios", (req, res) => {
  res.send("Listado de usuarios");
});

app.post("/usuarios", (req, res) => {
  res.send("Crear un usuario " + req.body.name);
});

app.put("/usuarios", (req, res) => {
  res.send("Actualizar un usuario " + req.body.name);
});

app.delete("/usuarios", (req, res) => {
  res.send("Borrar un usuario");
});

app.listen(PORT, () => {
  console.log(`Servidor levantado en el puerto ${PORT}`);
});
