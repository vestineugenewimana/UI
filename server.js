const http =require('http');
const app = require('./app');

port = process.env.port || '3000';
const server = http.createServer(app);
server.listen(process.env.port,()=>{
    console.log('server listen on port 3000');
})
