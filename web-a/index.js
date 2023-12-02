const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.json('backend web-a')
}) 

app.post('/github-event', (req, res) => {
  if (req.body.secret !== "tes123") {
    console.log('Wrong secret')
    return res.status(400).json() 
  }

  if (req.body.event === "event-a") {
    console.log('Incoming webhook with event-a')
    return res.json('web-a responded')
  }

  if (req.body.event === "event-b") {
    console.log('Incoming webhook with event-b')
    return res.json('web-a responded')
  }  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})