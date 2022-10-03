const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json({
    "Hello world from Node Express!\nThis app is being served from 4 locations around the world: New York, SFO, Amsterdam, Sydney.\nUse "dig <appname>" to see which one you are hitting.\nDeploy your own Node Express app with this same capability by visiting http://beta.section.io/docs/tutorials/frameworks/nodeexpress/\n\n",
    commit_id: process.env.COMMIT_ID || 'unknown',
    port
  })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
