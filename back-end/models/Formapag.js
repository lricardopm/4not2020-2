const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    formapagamento: { type: String, required: true },
    observacao: { type: String, required: true }
})

/*
   Parâmetros do método mongoose.model()
   1º -> Nome do modelo (sempre igual a nome do arquivo)
   2º -> Estrutura (esquema) do modelo
   3º -> Nome da coleção (collection) em que os objetos criados a partir do 
        modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('Formapag', esquema, 'formapags')