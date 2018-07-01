// import fs from 'fs'

console.log('Hello World')

const express = require('express')
const app = express()
const bodyParser = require('body-parser') // Allow to parse json data
const cors = require('cors') // If you want a server to be hosted on a different domain and for any client to be able to hit the server
const morgan = require('morgan') // Print out logs
const fs = require('fs'); // file server
const path = require('path');

var jsonFile = require('./{be_creative}.json')

app.use(morgan('combined'))
app.use(bodyParser.json()) // Allow app to parse any json requests sent in.
app.use(bodyParser.urlencoded({
  extended: true
})); // support encoded bodies
app.use(cors())

app.get('/', (request, response) => {
  response.json(jsonFile) 
})

app.post('/', (request, response) => {

  fs.readFile(path.resolve(__dirname, './{be_creative}.json'), function (err, data) {
    if (err) {
      response.status(402).json({
        error: 'Could not save new carousel data'
      })
    } else {
      let json = JSON.parse(data)
      json.Carousel.push(request.body.body)

      fs.writeFile(path.resolve(__dirname, './{be_creative}.json'), JSON.stringify(json), function (err) {
        if (error) {
          response.status(402).json({
            error: 'could not save new carousel data'
          })
        } else {
          response.status(201).json({})
        }
      })
    }
  })

})

app.listen(3000, () => console.log('App listening on port 3000!'))
