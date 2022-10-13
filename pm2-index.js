const crypto = require('crypto');

const express = require('express');
const app = express();

  app.get('/', (req, res) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    res.status(200).send('Hi,there');
    })
  })

  app.get('/fast', (req, res) => {  
    
    res.status(200).send('This is fast!!');
  })
  
app.listen(4002,()=>{console.log('listening to port 4002')})




