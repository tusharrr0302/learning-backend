// require('dotenv').config({path:'./env'});
import dotenv from "dotenv";
import connect_db from './db/index.js';

dotenv.config({
    path: './env'
})
connect_db();













/*
import express from "express"
const app = express()

(async () => {
    try{
       await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.error("ERROR", error);
        throw error
       })

       app.listen(process.env.PORT,()=>{
        console.log(`app is listening on ${process.env.PORT}`)
       })
    }
    catch (error){
        console.error("ERROR: ", error);
        throw error
    }
})();
*/