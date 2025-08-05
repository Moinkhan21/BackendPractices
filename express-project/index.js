let express = require('express');
let app = express();
app.use(express.json());
let myToken = "12345";
let myPass = "12345";

let checkToken = (req, res, next) => {
    console.log(req.query.token);
    console.log(req.query.token);
    if(req.query.token == " " || req.query.token == undefined || req.query.token == null) {
        return res.send(
            {
                status: 0,
                msg: "Please Fill the Token "
            }
        )
    }

    if(req.query.token != myToken) {
        return res.send(
            {
                status: 0,
                msg: "Please Fill The Correct Token"
            }
        )
    }
    next();
    
} 

app.use(checkToken);

app.use((req, res, next) => {
    

    if(req.query.pass == " " || req.query.pass == undefined || req.query.pass == null) {
        return res.send(
            {
                status: 0,
                msg: "Please Fill the Password"
            }
        )
    }

    if(req.query.pass != myPass) {
        return res.send(
            {
                status: 0,
                msg: "Please Fill The Correct Password"
            }
        )
    }
    next();
})

app.get("/", (req, res) => {
    res.send({ status: 1, msg: "Home Page API"})
})

app.get("/news", (req, res) => {
    res.send({ status: 1, msg: "News Page API"})
})

app.get("/products", (req, res) => {
    res.send({ status: 1, msg: "Products Page API"})
})

app.get("/news/:id", (req, res) => {
    let currentId = req.params.id;
    res.send("News Details API" + currentId);
})

app.post("/login", (req, res) => {
    console.log(req.body);

    res.status(200).json({
            status: 1,
            msg: "Login Page API",
            bodyData: req.body,
            queryData: req.query,
    })

    // res.send(
    //     { 
    //         status: 1,
    //         msg: "Login Page API",
    //         bodyData: req.body,
    //         queryData: req.query,
    //     }
    // );
})

app.listen("8000")