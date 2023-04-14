const express = require('express')
const app = express()
const favicon = require('serve-favicon')
const path = require('path')
const port = process.env.PORT || 3000

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
