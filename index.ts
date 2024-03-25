import express, { Application } from "express"
import dotenv from "dotenv"
import appConfig from "./mainApp"
import mongoose from "mongoose"



let URL = "mongodb://localhost:27017/ExcelCrest"

const app:Application = express()
const port = 1100 || parseInt(process.env.PORT!)



const Server = async()=>{
    try {
        appConfig(app)
        await mongoose.connect(URL).then(()=>{
            console.log("Db connection established")
        }).catch(()=>{
            console.log("Error connecting to MongoDBc")
        })

        app.listen(port, ()=>{
            console.log(`Server running on port ${port}`)
        })


    } catch (error) {
        console.log(error)
    }
}