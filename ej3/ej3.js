const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
const products = [
  { id: 1, name: "Taza de Harry Potter", price: 300 },
  { id: 2, name: "FIFA 23 PS5", price: 1000 },
  { id: 3, name: "Figura Goku Super Saiyan", price: 100 },
  { id: 4, name: "Zelda Breath of the Wild", price: 200 },
  { id: 5, name: "Skin Valorant", price: 120 },
  { id: 6, name: "Taza de Star Wars", price: 220 },
];

app.get("/products", (req, res) => {
  res.json({ description: "Products", products });
});

app.post("/products/create", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
    status: "active",
  };
  products.push(newProduct);
  res.status(201).send(products);
});

app.put("/products/update/:id", (req, res) => {
  const found = products.some((product) => product.id == req.params.id);
  if (found) {
    products.forEach((product) => {
      if (product.id == req.params.id) {
        product.name = req.body.name;
        product.price = req.body.price;
      }
    });
    res.send(products);
  } else {
    res.status(404).send(`There is no product with the id ${req.params.id}`);
  }
});

app.delete("/products/delete/:id", (req, res) => {
  const found = products.some((product) => product.id == req.params.id);
  if (found) {
    res.send(products.filter((product) => product.id != req.params.id));
  } else {
    res.status(404).send(`There is no product with the id ${req.params.id}`);
  }
});

app.get("/products/filter-by-price/:price", (req, res) => {
  const found = products.some((product) => product.price == req.params.price);
  if (found) {
    res.send(products.filter((product) => product.price == req.params.price));
  } else {
    res.send(`Product with price: ${req.params.id} not found`);
  }
});

app.get("/products/filter/50-250", (req, res) => {
  const minPrice = 50;
  const maxPrice = 250;
  const filteredProducts = products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );
  if (filteredProducts.length > 0) {
    res.send({
      description: "Products between $50 and $250",
      items: filteredProducts,
    });
  } else {
    res.send("No products found with that range of price.");
  }
});

app.get("/products/filter-by-id/:id", (req, res) => {
  const found = products.some((product) => product.id == req.params.id);
  if (found) {
    res.send(products.filter((product) => product.id == req.params.id));
  } else {
    res.send(`Product with id: ${req.params.id} not found`);
  }
});

app.get("/products/filter-by-name/:name", (req, res) => {
  const name = req.params.name;
  const found = products.some((products) => products.name === name);
  if (found) {
    res.json(found);
  } else {
    res.status(404).send(`Product ${name} not found`);
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
