const http = require('http')
const server = http.createServer()
const { readFile, createReadStream } = require('fs')
const readStream = createReadStream('index.html')

server.on('request', ({ url, method, headers }, res) => {
    console.log('Request received for:', url)

    const path = url.slice(-1) === '/' 
    ? url.slice(1).concat('index.html') 
    : url.slice(1)
    console.log('request received for: ', path);

    readFile(path, (err, buff) => {
     if(err){
      res.statusCode = 404;
      console.log('res', res)
      res.end('not found nodey\n')
     }
    res.end(buff)
  })
})

server.listen(8080)
