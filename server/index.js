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
 
app.post("/api/insert",(req, res)=>{

    const firstName = req.body.firstName;
    const lastName  = req.body.lastName;
    const salary  = req.body.salary;
    const address  = req.body.address;

    const sqlInsert = "INSERT INTO customer (firstName,lastName,salary,address)VALUES(?,?,?,?);"
    db.query(sqlInsert, [firstName,lastName,salary,address],(err,result)=>{
        console.log(result);
        // res.send("hell world2");
       
    })
});


app.get("/api/get",(req, res)=>{
    const sqlInsert = "SELECT * FROM customer"
    db.query(sqlInsert,(err,result)=>{
        console.log(result);
        res.send(result);
       
    })
});

app.listen(3001,() => {
    console.log("runing on port 3001");
});