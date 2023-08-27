const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, my name is [Your Name]!\n');


  console.log('sanjeev');
});

const port = 4000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
  
  
//   const yourName = 'Sanjeev';
  
  
//   res.end(`Hello, ${yourName}!\n`);
// });

// const port = 4000;

// server.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
