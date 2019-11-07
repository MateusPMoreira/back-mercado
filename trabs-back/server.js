const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");

//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());
//iniciando o banco de dados
mongoose.connect(
  "mongodb://localhost:27017/nodeususuario",
  { userNewUrlParser: true },
  { useUnifiedTopology: true }
);

require('./src/models/Product');

//rotas
app.use('/usu', require("./src/routes"));
app.listen(3001);