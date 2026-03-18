const express = require("express");
const cors = require("cors");
require("./config/db"); 

const app = express();

app.use(cors());
app.use(express.json());

// LIGANDO AS ROTAS
const authRoutes = require("./routes/authRoutes");
const consultaRoutes = require("./routes/consultaRoutes");

app.use("/auth", authRoutes);
app.use("/consultas", consultaRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
    console.log("MongoDB conectado localmente!");
});