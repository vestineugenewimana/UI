const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    const questions = [
        {
            user:'fred',
            meetup:1,
            title:'agile development',
            body:'what will be discused'
        }
    ];
    res.send(questions);
});
module.exports=router;