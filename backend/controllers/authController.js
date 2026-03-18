const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.register = async (req,res)=>{

const {nome,email,senha} = req.body

const hash = await bcrypt.hash(senha,10)

const user = new User({
nome,
email,
senha:hash
})

await user.save()

res.json({msg:"Usuário criado"})

}

exports.login = async (req,res)=>{

const {email,senha} = req.body

const user = await User.findOne({email})

if(!user){
return res.status(404).json({msg:"Usuário não encontrado"})
}

const valid = await bcrypt.compare(senha,user.senha)

if(!valid){
return res.status(400).json({msg:"Senha inválida"})
}

const token = jwt.sign({id:user._id},"segredo")

res.json({token})

}