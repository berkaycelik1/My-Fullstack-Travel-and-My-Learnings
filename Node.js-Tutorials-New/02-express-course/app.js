const express = require('express');
const app = express()

app.get('/',(req, res)=>{
    console.log('user hit the resource');
    res.send('Home Page')
})

app.get('/about',(req,res)=>{
     res.send('About Page')
})

app.listen(5001, ()=>{
    console.log('server is listening on port 5001...')
})


// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen