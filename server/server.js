import express from 'express'
import {port} from './config/config.js'
import chalk from 'chalk';
import connectionDB from './config/db.js';

const app = express();


const PORT = port || 4000

connectionDB();
app.listen(PORT ,()=>{
    console.log(`${chalk.green.bold('Server')} running on ${chalk.green.bold(port)}`)
})
