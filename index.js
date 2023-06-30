const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3100;

app.use(bodyParser.json());
app.get('/',(req,res)=>{

    res.send('Welcome');
})

app.post('/registerSchool',(req,res)=>{
    res.send('welcome to backend part');
    console.log(req);
})
app.listen(PORT,()=>{
    console.log("server is worling");
});