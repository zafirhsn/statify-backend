const express = require("express");
const app = express();
const history = require("connect-history-api-fallback");

const http = require('http')
const fs = require('fs')
const httpPort = 8080

app.use(history())
app.use(express.static("C:/Users/Zafir/statify/vue-statify/dist"))

app.listen(8080, ()=>{
  console.log("listening");
})

// http.createServer((req, res) => {
//   fs.readFile('dist/index.html', 'utf-8', (err, content) => {
//     if (err) {
//       console.log('We cannot open "index.html" file.')
//     }

//     res.writeHead(200, {
//       'Content-Type': 'text/html; charset=utf-8'
//     })

//     res.end(content)
//   })
// }).listen(httpPort, () => {
//   console.log('Server listening on: http://localhost:%s', httpPort)
// })

