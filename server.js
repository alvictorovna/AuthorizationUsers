import express from "express";
import apiRouter from './routes/routes';


import {authdb} from './db/index'

const app = express();

authdb.sync().then(()=>{
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Server listening on port: ${port}`));
}).catch(err=>console.log(err));

app.use(apiRouter);

 

