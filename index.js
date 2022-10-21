


// HTTP y Methods

const express = require('express')

const app = express()

// Envia peticion GET por defecto las URL
app.get('/products', (req, res) => {
  res.send('lista de productos')
  // Validate date
  // Query a database
  // Process data

})

app.put('/products', (req, res) => {
  res.send('actualizando producto')
})

app.post('/products', (req, res) => {
  res.send('creando productos')
})

app.delete('/products', (req, res) => {
  res.send('eliminando productos')
})

app.patch('/products', (req, res) => {
  res.send('actualizando una parte del producto')
})

app.listen(3000)
console.log(`Server on port ${3000}`);

