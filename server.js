const http = require('http')
const server = http.createServer()
const { readFile, createReadStream } = require('fs')

server.on('request', ({ url, method, headers }, res) => {
    console.log('Request received for:', url)

    const path = url.slice(-1) === '/' 
    ? url.slice(1).concat('index.html') 
    : url.slice(1)


    const readStream = createReadStream(path)

      readStream.on('open', function () {
	    readStream.pipe(res);
	  });

  //   readFile(readStream, (err, buff) => {
  //    if(err){
  //     res.statusCode = 404;
  //     console.log('res', res)
  //     res.end('not found nodey\n')
  //    }
  //   res.end(buff)
  // })
})

server.listen(8080)
