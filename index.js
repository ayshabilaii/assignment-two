const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200; // success response codem
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, !\n');
});

server.listen(port, hostname, () => {
  console.log('Server running at http://${hostname}:${port}/');
})

// require module
var connect = require('connect')
 
// create app
var app = connect()

//lecture two video
function helloworld(req,res, next)
{
  res.setHeader('Content-Type','text/plain');
  res.end("Hello World");
}

function GoodByeworld(req,res, next)
{
  res.setHeader('Content-Type','text/plain');
  res.end("Goodbye World");
}

app.use('/Aboutme',Aboutme);
app.use('/Contactus',Contactus);
app.listen(3000);
console.log('Sever is running on local host')