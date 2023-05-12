const express = require('express')
const app = express()
const port = 3000
const materiroutes = require('./routes/materi')
const budayaroutes = require('./routes/budaya')
const kuisroutes = require('./routes/kuis')


app.use(materiroutes)
app.use(budayaroutes)
app.use(kuisroutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`konek mazze!!!`)
})
