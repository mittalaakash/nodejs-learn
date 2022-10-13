process.env.UV_THREADPOOL_SIZE=1;
const cluster = require('cluster');
const crypto = require('crypto');

if (cluster.isMaster) {
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();

  cluster.on('fork', function(worker) {
        console.log('worker:' + worker.id + " is forked");
    });
  cluster.on('online', function(worker) {
      console.log('worker:' + worker.id + " is online");
  });
  cluster.on('listening', function(worker) {
      console.log('worker:' + worker.id + " is listening");
  });
  cluster.on('disconnect', function(worker) {
      console.log('worker:' + worker.id + " is disconnected");
  });
  cluster.on('exit', function(worker) {
      console.log('worker:' + worker.id + " is dead");
  });

} else {

const express = require('express');
const app = express();

  app.get('/', (req, res) => {
    console.log('worker:' + cluster.worker.id + " going to send response ");
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    res.status(200).send('Hi,there');
    })
  })

  app.get('/fast', (req, res) => {  
    
    console.log('worker:' + cluster.worker.id + " going to send response ");
    res.status(200).send('This is fast!!');
  })
  
app.listen(4002,()=>{console.log('worker:' + cluster.worker.id +' :listening to port 4002')})

};



