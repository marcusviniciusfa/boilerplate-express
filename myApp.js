require('dotenv').config()
let express = require('express');
let app = express();

/**
 * lesson 1
 */
// app.get('/', function(req, res) {
//     res.send('Hello Express')
// })

/**
 * lesson 2
 * servir html
 */
// let absolutePath = __dirname + '/views/index.html'
// app.get('/', function(req, res) {
//     res.sendFile(absolutePath)
// })

/**
 * lesson 3
 * expor conteúdo de diretório estático
 */
// app.use('/public', express.static(__dirname + '/public'))

// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/views/index.html')
// })

/**
 * lesson 4
 * json
 */
// app.get('/json', function(req, res) {
//     res.json({message: "Hello json"})
// })

/**
 * lesson 5
 * .env
 */
// app.get('/json', function(req, res) {
//     let messageStyle = process.env.MESSAGE_STYLE
//     let data = {message: 'Hello json'}
//     if (messageStyle == 'uppercase') {
//         data.message = data.message.toUpperCase()
//     }
//     res.json(data)
// })

/**
 * lesson 6
 * middlewares
 */
// app.use(function(req, res, next) {
//     console.log(`${req.method} ${req.path} - ${req.ip}`)
//     next()
// })

// app.get('/', function(req, res) {
//     res.send('Hello Express')
// })

/**
 * lesson 7
 * concatenamento de middleware com rotas
 */
// app.get('/now', function(req, res, next) {
//     req.time = new Date().toString()
//     next()
// }, function(req, res) {
//     res.json({time: req.time})
// })

/**
 * lesson 8
 * parâmetros de rota
 */
// app.get('/:word/echo', function(req, res) {
//     res.json({echo: req.params.word})
// })

/**
 * lesson 9
 * strings de consulta
 * encadeamento de manipuladores
 */
app.route('/name')
    .get(function(req, res) {
        res.json({name: `${req.query.first} ${req.query.last}`})
    })

 module.exports = app;