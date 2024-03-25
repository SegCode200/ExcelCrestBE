import express, { Application } from "express";
import cors from "cors";



const appConfig= (app:Application)=>{
    app.use(cors())
    app.use(express.json())
}


export default appConfig