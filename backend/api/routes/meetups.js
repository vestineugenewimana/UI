const express = require('express');
const router =express.Router();

//get all meetups
router.get('/',(req,res)=>{
    const meetups = [
        {
            id:1,
            createdon:'04/12/2018',
            location:'kigali',
            images:'',
            topic:'agile development',
            happeningOn:'04/01/2019',
            tags:'come early'
        },
        {
            id:2,
            createdon:'04/03/2019',
            location:'kigali',
            images:'',
            topic:'scrum development',
            happeningOn:'14/03/2019',
            tags:'come early'
        }
    
    ];
res.status(200).send(meetups);
});
//get specific meetup
router.get('/:id',(req,res)=>{
const meetup = meetups.find(c =>c.id === parseInt(req.params.id));
if(!meetup) res.status(404).send('meetup with given id is not found');
res.send(meetup);
});
//create meetup recordnod
router.post('/',(req,res)=>{
const meetup = [
    {
        id: meetups.length +1,
        createdon:req.body.createdon,
        location:req.body.location,
        images:req.body.images,
        topic:req.body.topic,
        happeningOn:req.body.happeningOn,
        tags:req.body.tags
    }
];
meetups.push(meetup);
res.status(200).json({
    message:"meetup was created",
    meetup:meetup
});
});
//upcomming meetups
router.get('/upcomming',(req,res)=>{
res.send(meetups);
});
module.exports = router;