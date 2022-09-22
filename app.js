const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json({
    commit_id: process.env.COMMIT_ID || 'unknown2',
    port
  })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
