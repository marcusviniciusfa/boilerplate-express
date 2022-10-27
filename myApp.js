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
 */
// let absolutePath = __dirname + '/views/index.html'
// app.get('/', function(req, res) {
//     res.sendFile(absolutePath)
// })

/**
 * lesson 3
 */
// app.use('/public', express.static(__dirname + '/public'))

// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/views/index.html')
// })

/**
 * lesson 4
 */
// app.get('/json', function(req, res) {
//     res.json({message: "Hello json"})
// })

/**
 * lesson 5
 */
// app.get('/json', function(req, res) {
//     let messageStyle = process.env.MESSAGE_STYLE
//     let data = {message: 'Hello json'}
//     if (messageStyle == 'uppercase') {
//         data.message = data.message.toUpperCase()
//     }
//     res.json(data)
// })

 module.exports = app;