const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const jwtPassword = "123456";

app.use(express.json());

const ALL_USER = [
    {
        username:"sourabh@gmail.com",
        password:"123",
        name:"Sourabh Misal",
    },
    {
        username:"bharat@gmail.com",
        password:"123341",
        name:"Bharat Misal",
    },
    {
        username:"Jayashri@gmail.com",
        password:"12367454",
        name:"Jayashri Misal",
    }
];

function userExists(username, password){
    let userExists = false;
    for(let i = 0; i < ALL_USER.length; i++){
        if(ALL_USER[i].username === username && ALL_USER[i].password === password){
            userExists = true;
            break; // Exit the loop early once a match is found
        }
    }
    return userExists;
}

app.post("/signin", function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)){
        return res.status(403).json({
            msg: "User doesn't exit"
        });
    }

    var token = jwt.sign({username: username}, jwtPassword);
    return res.json({
        token,
    });
});


app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

      res.json({
        users: ALL_USER
      })
      // return a list of users other than this username from the database
    
      
    
  });

app.listen(3000);