console.log('Hello World')

const express = require('express')
const app = express()
const bodyParser = require('body-parser') // Allow to parse json data
const cors = require('cors') // If you want a server to be hosted on a different domain and for any client to be able to hit the server
const morgan = require('morgan') // Print out logs
var jsonFile = require('./{be_creative}.json')

app.use(morgan('combined'))
app.use(bodyParser.json()) // Allow app to parse any json requests sent in.
app.use(cors())

app.get('/', (req, res) => { //endpoint
  res.json(jsonFile) // JSON.stringify
})

app.post('/', (req, res) => { //endpoint
  res.write(JSON.stringify(jsonFile));
  req.body.body; //res.json => JSON.stringify
  res.send(req.body);
  console.log(req.body.body);
})

app.listen(3000, () => console.log('App listening on port 3000!'))

/*app.post('/', (req, res) => { //endpoint
  res.write(JSON.stringify(jsonFile));
  req.body.body; //res.json => JSON.stringify
  res.send(req.body);
  console.log(req.body.body);
  console.log(res.send(req.body));
  /*res.status(201).json({
    status: 'OK',
    message: 'Added slide successfully'
  })
  
})

app.listen(3000, () => console.log('App listening on port 3000!'))*/
