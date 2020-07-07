const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://dohunkim:abcd1234@dohunscluster.yc4zv.mongodb.net/dohunsCluster?retryWrites=true&w=majority', {
   useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify:false 
}).then(()=>console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World! 3차 수정(07/07) '))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))