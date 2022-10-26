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

 module.exports = app;