import express from "express"
const app = express()
const port = 5000
import cors from "cors"
app.use(cors());
import bodyParser from "body-parser";
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended:true}))



//db
import Connection from "./database/db.js"

import Route from "./routes/route.js"

Connection();

app.use('/', Route)

app.listen(port, () =>{
    console.log('gg!')
})