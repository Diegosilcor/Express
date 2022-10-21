


// Routing

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/about', (req, res) => {
  res.send('About')
})

app.get('/weather', (req, res) => {
  res.send('The current weather is nice')
})

// Crear una ruta que no importa que ruta visite, siempre quiero que responda lo mismo
// USE

app.use((req, res) => {
  res.status(404).send('No se encontro tu pagina')
})

app.listen(3000)
console.log(`Server on port ${3000}`);

