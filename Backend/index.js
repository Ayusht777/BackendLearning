import express from "express";
const PORT = process.env.PORT ;
const app = express();
const data = [
  { id: 1, name: "ayush" },
  { id: 2, name: "divyanshu" },
];
app.get("/", (req, res) => {
  res.send("Hello Dev");
});
app.get("/ayush", (req, res) => {
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});
