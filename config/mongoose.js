const mongoose = require('mongoose')
const envVars = require('../config/constants')
const connectToDB = async () => {
    try{
        mongoose.connect(envVars.mongo_uri);
        console.log("Connected To mongodb")
    }catch(e){
        console.log(e)
    }
}

module.exports = connectToDB
