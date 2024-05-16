const express = require('express')

const app = express();

function sum(n){
    let ans = 0
    for ( let i = 0; i <= n; i++){
        ans = ans + i;
    }
    return ans;
}

app.get('/',(req,res) => {
    const n = req.query.n;
    const ans = sum(n);
    res.send("hi total sum till n is " + ans);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});