import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import fetch from 'node-fetch'

const app = express()
const port = 3001

app.use(cors())
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.json('backend web-b')
})

app.get('/trigger-webhook-event-a', async (req, res) => {
  try {
    const secret = {
      'secret': "tes123",
      'event': "event-a"
    }
    
    const response = await fetch('http://localhost:3000/github-event', {
      method: 'POST',
      body: JSON.stringify(secret),
      headers: {'Content-Type': 'application/json'}
    })
    
    res.json('Event success')

    console.log('response', response)
  } catch (error) {
    console.log(error)
  }
})

app.get('/trigger-webhook-event-b', async (req, res) => {
  try {
    const secret = {
      'secret': "tes123",
      'event': "event-b"
    }
    
    const response = await fetch('http://localhost:3000/github-event', {
      method: 'POST',
      body: JSON.stringify(secret),
      headers: {'Content-Type': 'application/json'}
    })
    
    res.json('Event success')

    console.log('response', response)
  } catch (error) {
    console.log(error)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})