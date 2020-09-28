const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    datapedido: { type: Date, required: true },
    parceiro: { type: mongoose.ObjectId, ref: 'Parceiro', required: true },
    cliente: { type: mongoose.ObjectId, ref: 'Cliente', required: true },
    produto: { type: mongoose.ObjectId, ref: 'Produto', required: true },
    quantidade: { type: Number, required: true },
    valortotal: { type: Number, required: true },
    formapag: { type: mongoose.ObjectId, ref: 'Formapag', required: true },
    tipoentrega: { type: String, required: true },
    observacao: { type: String, required: true }
})

/*
   Parâmetros do método mongoose.model()
   1º -> Nome do modelo (sempre igual a nome do arquivo)
   2º -> Estrutura (esquema) do modelo
   3º -> Nome da coleção (collection) em que os objetos criados a partir do 
        modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('Pedido', esquema, 'pedidos')