const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Rota de Cadastro REAL (Salvando no MongoDB)
router.post("/cadastro", async (req, res) => {
    try {
        const novoUsuario = new User(req.body);
        await novoUsuario.save();
        res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!", usuario: novoUsuario });
    } catch (err) {
        console.error(err);
        res.status(400).json({ erro: "Erro ao cadastrar. Verifique os dados." });
    }
});

// Rota de Login REAL (Buscando no MongoDB)
router.post("/login", async (req, res) => {
    try {
        const { email, senha } = req.body;
        const usuario = await User.findOne({ email, senha });

        if (usuario) {
            res.status(200).json({ mensagem: "Login realizado!", usuario });
        } else {
            res.status(401).json({ erro: "E-mail ou senha incorretos!" });
        }
    } catch (err) {
        res.status(500).json({ erro: "Erro no servidor" });
    }
});

module.exports = router;