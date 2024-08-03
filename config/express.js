const express = require('express')
const Routes = require('../routes/index.route')
const envVars = require('../config/constants')
const cors = require('cors')
const app = express();

const createApp = () => {
    app.use(express.json());
    app.use(Routes)
    app.use(cors({
        origin: [envVars.device_url],  // Updated port here
        credentials: true
    }));
    return app;
  };

module.exports = createApp

  

