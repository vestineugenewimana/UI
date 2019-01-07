const express = require('express');
const router =express.Router();
const meetups = [
    {
        id:1,
        createdon:'04/12/2018',
        location:'kigali',
        imageUrl:'',
        topic:'agile development',
        happeningOn:'04/01/2019',
        tags:'come early'
    },
    {
        id:2,
        createdon:'04/03/2019',
        location:'kigali',
        imageUrl:'',
        topic:'scrum development',
        happeningOn:'14/03/2019',
        tags:'come early'
    }

];
//get all meetups
router.get('/',(req,res)=>{
    
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
        imageUrl:req.body.imageUrl,
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
//update meetup
router.put(('/:id'),(req,res)=>{
const meetup = meetups.find(c =>c.id === parseInt(req.params.id));
 if(!meetup) res.status(404).send('meetup with given id is not found');
    meetup.createdon = req.body.createdon,
    meetup.location = req.body.location,
    meetup.imageUrl = req.body.imageUrl,
    meetup.topic = req.body.topic,
    meetup.happeningOn = req.body.happeningOn,
    meetup.tags = req.body.tags
    res.status(200).send(meetup);
});
//delete meetup
router.delete('/:id',(req,res)=>{
const meetup = meetups.find(c =>c.id === parseInt(req.params.id));
if(!meetup)res.status(404).send('meetup with given id is not found');
const index = meetups.indexOf(meetup);
meetups.splice(index,1);
res.status(200).send(meetup);
});
module.exports = router;