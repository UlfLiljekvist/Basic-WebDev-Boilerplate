const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/mainstyle.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/mainstyle.css'));
})

app.get('/main.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/main.js'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})