import express from "express";
import "dotenv/config.js";
import cors from "cors";
import articleRoute from '../Back-end/routers/article.js'

import db from './models/index.js'
const app = express();

const corsOptions = {
  origin: 'http://localhost:3000', // Allow only your frontend origin
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

app.use(express.json());
app.use(cors(corsOptions));
app.use('/articles',articleRoute)


//the port where your application will listen
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, async() => {
  console.log(`Server is running on port ${port}`);
  console.log("connecting to the DB")
  await db.sequelize.sync()
  console.log("connected")
}); 