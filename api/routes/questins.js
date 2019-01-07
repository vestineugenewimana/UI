const express = require('express');
const router = express.Router();
const questions = [
    {
        user:'fred',
        meetup:1,
        title:'agile development',
        body:'what will be discused'
    }
];
router.get('/',(req,res)=>{
     res.send(questions);
});
//post question
router.post('/',(req,res)=>{
    const question = [
        {
        user:req.body.user,
        meetup:req.body.meetup,
        title:req.body.title,
        body:req.body.body

        }
    ];
    questions.push(question);
    res.status(200).json({
        message:"meetup was created",
        question:question
    });
    });
    //delete question
    router.delete('/:id',(req,res)=>{
        const question = questions.find(c =>c.id === parseInt(req.params.id));
        if(!question)res.status(404).send('meetup with given id is not found');
        const index = questions.indexOf(question);
        questions.splice(index,1);
        res.status(200).send(question);
        });
    //patch question / update question
        router.patch('/:id',(req,res)=>{
            
        });
module.exports=router;