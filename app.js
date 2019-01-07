const express = require('express');
const app =express();
/*
app.use((req,res)=>{
res.header('Access-Control-Allow-Origin','*');
res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');
if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods','put,post,get,delete,patch');
    return res.status(200).json({});
}
});
*/
const bodyparsel = require('body-parser');
app.use(express.json());
const meetupRoutes = require('./api/routes/meetups');
const questionRoutes = require('./api/routes/questins');
app.use(bodyparsel.urlencoded({extended:false}));
app.use(bodyparsel.json());
app.use('/api/v1/meetups',meetupRoutes);
app.use('/api/v1/questions',questionRoutes);
module.exports=app;
