console.log('Hello World')

const express = require('express')
const app = express()
const bodyParser = require('body-parser') // Allow to parse json data
const cors = require('cors') // If you want a server to be hosted on a different domain and for any client to be able to hit the server
const morgan = require('morgan') // Print out logs
/*const fs = require('fs');*/

var jsonFile = require('./{be_creative}.json')
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(morgan('combined'))
app.use(bodyParser.json()) // Allow app to parse any json requests sent in.
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors())

app.get('/', (request, response) => { //endpoint
  response.json(jsonFile) // JSON.stringify
})

app.post('/', urlencodedParser, (request, response) => { //endpoint
  
  // request.body.body;
  
  response = {
    item: request.body.body
  }
  console.log(response);
  
  response.write(JSON.stringify(jsonFile));
  
})

app.listen(3000, () => console.log('App listening on port 3000!'))
