


// HTTP Response

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/miArchivo', (req, res) => {
  res.sendFile('./javascript.png', {
    root: __dirname
  })
})


app.get('/user', (req, res) => {
  res.json({
    "name": "Diego",
    "lastname": "Silva Cordoba",
    age: 32,
    points: [1, 2, 3],
    addres: {
      city: "Madrid",
      street: "Duque 20"
    }
  })
})

app.get('/isAlive', (req, res) => {
  res.sendStatus(200)
});

app.listen(3000);

console.log(`Server on port${3000}`);

