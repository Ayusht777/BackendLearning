import express from "express";
const Port = process.env.Port;
const app = express();
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    description: "This is product 1",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    description: "This is product 2",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    description: "This is product 3",
  },
  {
    id: 4,
    name: "Product 4",
    price: 400,
    description: "This is product 4",
  },
];
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/products", (req, res) => res.send(products));

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
