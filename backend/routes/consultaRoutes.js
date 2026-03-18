const express = require("express");
const router = express.Router();

// Rota de teste para consultas
router.get("/teste", (req, res) => {
    res.send("As rotas de consulta estão funcionando!");
});

module.exports = router;