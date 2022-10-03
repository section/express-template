const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json({
    "Hello world from Node Express!\n\nThis app is being served from 4 locations around the world for low latency and high availability: New York, SFO, Amsterdam, Sydney.\n\nUse:\n$ dig floral-smoke-4415.section.app\nto see which location you are hitting.\n\nDeploy your own Node Express app with this same capability by visiting http://beta.section.io/docs/tutorials/frameworks/nodeexpress/\n\n",
    commit_id: process.env.COMMIT_ID || 'unknown',
    port
  })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
