const express = require('express')

const app = express()

app.get('/', (req, res) => {
  return res.send('<h1>สวัสดี my name is aof joker on the rock</h1><p>wdws</p> <a href="https://www.w3schools.com">Visit W3Schools.com!</a>')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.info('Server is ready at', PORT)
})