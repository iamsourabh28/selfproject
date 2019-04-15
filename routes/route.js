const express=require('express');
const router=express.Router();

//retrieving contacts
router.get('/contacts',(req,res,next)=>{
    res.send('retrieving the contact list');
}); 

//add contacts
router.post('/contacts',(req,res,next)=>{
    //logic to add contact
});

//delete contacts
router.delete('/contacts',(req,res,next)=>{
    //logic to delete contact
});
module.exports=router;