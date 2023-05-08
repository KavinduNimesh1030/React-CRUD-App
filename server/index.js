const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const app  = express();
const mysql = require("mysql")

const db  =  mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root1234",
    database : "react-test"
});

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended: true}));

app.listen(3001,() => {
    console.log("runing on port 3001");
});