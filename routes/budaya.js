const express = require('express')
const routes = express.Router()



routes.get('/budaya', (req, res) => {
  res.send('Hello budaya!')
})


module.exports = routes