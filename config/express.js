
import express from 'express'
import cors from 'cors';
const app = express();

const createApp = () => {
    app.use(express.json());
    app.use(cors({
        origin: ["http://192.168.29.23:8081"],  // Updated port here
        credentials: true
    }));
    return app;
  };
  


module.exports =  createApp;
