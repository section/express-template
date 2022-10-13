const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send(
    `<head><style>body { font-family: \"Segoe UI\"; }</style></head>
    <h1>Hello World from Node Express on Section!!!!!</h1><p>This app is being served from 4 locations around the world for <b>low latency</b> and <b>high availability</b>: New York, SFO, Amsterdam, Sydney.</p>
    <p>Discover the location you are hitting with the dig command.</p>
    <p>dig HOSTNAME</br>(look in the ANSWER section for a 3 letter city code)</p>
    <p>Distribute your own Node Express app by visiting <a href=\"http://section.io/docs/tutorials/frameworks/nodeexpress/\">http://section.io/docs/tutorials/frameworks/nodeexpress/</a></p>`
    );
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
