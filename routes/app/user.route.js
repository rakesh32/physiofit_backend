const express = require('express')
const userCtrl = require('../../controller/app/user.controller')
const router = express.Router();


// router.use('/')

router.post('/signup',signUp);

async function signUp(req,res,next){
    try{
        const response = userCtrl.signUp(req);
        if(response) return res.status(201).json({ message: 'User created successfully', response });
        return res.status(400).json({message:"Some thing went wrong"}) 
    }catch(e){
        throw e
        console.log(e)
    }
}


router.post('/login', userLogin);

async function userLogin (req, res,next) {
    try {
      const response = await userCtrl.userLogin(req);
      console.log(response)
      if(response) return res.status(200).json({message: 'successfully logged in',response})
        return res.status(400).json({message:'Not Found'})
    } catch (error) {
      console.error("Error during login:", error.message);
      return res.status(500).json({ Login: false, Message: "Internal server error fslf" });
    }
  }

  router.get('/:id', getUserById);

  async function getUserById(req, res,next) {
    try {
      const response = await userCtrl.getUserById(req);
      if(response) return res.status(200).json({message:"Retrived Successfully",response});
      return res.status(200).json({message:'something went wrong'})
    } catch (error) {
      console.error("Error fetching user details:", error.message);
      res.status(500).json({ Message: "Internal server error ffssf" });
    }
  }

module.exports = router