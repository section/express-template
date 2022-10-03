const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send(
    "<h1>Hello World from Node Express!</h1><p>This app is being served from 4 locations around the world for low latency and high availability: New York, SFO, Amsterdam, Sydney.</p><p>Use: dig floral-smoke-4415.section.app</br>to see which location you are hitting.</p><p>Deploy your own Node Express app with this same capability by visiting http://beta.section.io/docs/tutorials/frameworks/nodeexpress/</p>",
    );
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
