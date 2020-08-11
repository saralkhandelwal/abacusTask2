const express = require('express');
const database = require('./database');
const app = express();
database.initializeMongo();
app.get('/',function (req,res) 
{
    res.send('hello world')
})
app.listen(3000,function ()
{
    console.log('app listening on port 3000')
})
app.get('/testFind',function (req,res)
{
    database.User.find(function (err,users)
    {
        if(err) return res.error(err)
        console.log(users);
        res.json(users);
    })
})

