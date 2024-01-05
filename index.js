require("dotenv").config();

const express = require("express");
const router = require("./routers");
const { sequelize } = require("./models/index");

sequelize
  .authenticate()
  .then(() => {
    console.log("Koneksi ke database berhasil.");
  })
  .catch((err) => {
    console.error("Koneksi ke database gagal:", err);
  });

const app = express();
const port = process.env.port || 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
