const express = require('express')

const app = express();

app.use(express.json());

app.get('/get-health', (req,res) => {
    const username = req.headers.username;
    const password = req.headers.password;
//    const kidneyId = req.query.kidneykId;

    if(username === "sourabh" && password === "pass"){
        res.status(200).json({
            msg: " you kidney is fine",
        });
    }

   res.status(404).json({msg :"wrong input",});
})

app.listen(3000);