const fetch = require('node-fetch')

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', async (req, res) => {
  const response = await fetch('https://ipinfo.io/json');
  const info = await response.text();
  const locationInfo = JSON.parse(info);

  res.send(
    `<head><style>body { font-family: "Segoe UI"; }</style></head>
    <h1>Hello World from Node Express on Section!!!</h1><p>This app is being served from 2 locations around the world for <b>low latency</b> and <b>high availability</b>: New York, SFO.</p>
    <p>You are hitting the example application running in ${locationInfo.city}, ${locationInfo.region} - ${locationInfo.country}</p>
    <p>Distribute your own Node Express app by visiting <a href=\"http://section.io/docs/tutorials/frameworks/nodeexpress/\">http://section.io/docs/tutorials/frameworks/nodeexpress/</a></p>`
    );
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
