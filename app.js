const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const genres = require('./Router/genres');
dotenv.config({path:'./config/config.env'})

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use('/api/genres',genres)

app.get('/',(req,res)=>{
    res.send("Hello This Is My First Vidlly App On Amazon Server...")
})
const port = process.env.PORT || process.env.PORT_NUMBER;

app.listen(port,()=>{
    console.log(`Your App Is Listening on The Given Port ${port}...`)
})