const express = require('express');
const cors = require ('cors');
require('dotenv').config({path:'./config.env'});
const port = process.env.PORT || 5000;

const app =express();
app.use(cors());
app.use(express.json());
// app.use(require('./routes/record'));

//driver connection
//  const dbo=require('./db/conn');
app.get('/',(req,res)=>{
    try {
            res.send("{'name':'florin'}");
    } catch (error) {
        console.error(error)
    }

})

 app.listen(port,()=>{
    //behavior

    console.log(`Server listening at port : ${port}`);
 })