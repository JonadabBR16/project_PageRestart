const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const multer = require('multer')
const path = require('path')

//Middleware para servir arquivos estacos
app.use(express.static(__dirname))

//Body-parcer para ler dados de formularios
app.use (bodyParser.urlencoded({extended: true}))
app.use (bodyParser.json())

//configuração de armazenamento para upload com multer
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, pach.join(__dirname,'upload'))
    },
    filename: function(req, file, callback){
        const nomeArquivo = `${date.now()}_${file.originalname}`
    }
})

//Inicializando servidor
const PORT = 8080
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})