import express from "express";
import pug from "pug";
import morgan from 'morgan';

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug")

app.get("/audi", (req, res) => {
    res.render('index', {titel: "Velkommen til min blog", models: audis})
})

app.listen(8080, () => {console.log("Server running on port: 8080")})


const audis = [
  {
    model: "Audi A3",
    year: 2022,
    color: "White",
    price: 32000
  },
  {
    model: "Audi A4",
    year: 2023,
    color: "Black",
    price: 41000
  },
  {
    model: "Audi A6",
    year: 2021,
    color: "Silver",
    price: 52000
  },
  {
    model: "Audi Q5",
    year: 2024,
    color: "Blue",
    price: 58000
  },
  {
    model: "Audi R8",
    year: 2023,
    color: "Red",
    price: 142000
  }
];
