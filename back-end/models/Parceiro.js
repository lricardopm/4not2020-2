const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: { type: String, required: true },
    endereco: { type: String, required: true },
    telefone: { type: String, required: true },
    categoria: { type: String, required: true },
    horafunc: { type: String, required: true },
    valormin: { type: Number, required: true, min: 12.0, default: 15.0 },
    valortax: { type: Number, required: true, min: 5.5, default: 5.5 },
    tempoent: { type: String, required: true }
})

/*
   Parâmetros do método mongoose.model()
   1º -> Nome do modelo (sempre igual a nome do arquivo)
   2º -> Estrutura (esquema) do modelo
   3º -> Nome da coleção (collection) em que os objetos criados a partir do 
        modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('Parceiro', esquema, 'parceiros')