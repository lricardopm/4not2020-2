const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: { type: String, required: true },
    cpf: { type: String, required: true },
    endent: { type: String, required: true },
    cidade: { type: String, required: true },
    uf: { type: String, required: true },
    telefone: { type: String, required: true },
    email: { type: String, required: true, index: { unique: true } }
})

/*
   Parâmetros do método mongoose.model()
   1º -> Nome do modelo (sempre igual a nome do arquivo)
   2º -> Estrutura (esquema) do modelo
   3º -> Nome da coleção (collection) em que os objetos criados a partir do 
        modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('Cliente', esquema, 'clientes')