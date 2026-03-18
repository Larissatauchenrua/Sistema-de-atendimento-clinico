const jwt = require("jsonwebtoken")

module.exports = function(req,res,next){

const token = req.headers.authorization

if(!token){
return res.status(401).json({msg:"Acesso negado"})
}

try{

const decoded = jwt.verify(token,"segredo")

req.userId = decoded.id

next()

}catch{

return res.status(400).json({msg:"Token inválido"})

}

}