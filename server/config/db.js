import chalk from "chalk";
import mongoose from "mongoose";
import { dURL } from "./config.js";


const connectionDB = async()=>{
    try{
        const conn = await mongoose.connect(dURL)
        console.log(chalk.green.bold(`MongoDB Connected: ${conn.connection.host}`));
    }catch(err){
        console.log(`${chalk.red.bold("Error")} Connection is ${chalk.red.bold("unsuccessful")}`)
    }
}

export default connectionDB;