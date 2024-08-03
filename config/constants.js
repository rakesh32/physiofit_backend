
require('dotenv').config();
const envVars = {
    mongo_uri: process.env.MONGO_URI,
    port: process.env.PORT,
    device_url: process.env.DEVICE_URL
}

module.exports = envVars