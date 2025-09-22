const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, '../frontend/dist')))

app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hello from Render!',
    timestamp: new Date().toISOString(),
  })
})

app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    version: '1.0.0',
  })
})

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'))
})

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    console.log(`Local: http://localhost:${PORT}`)
  })
}

module.exports = app
