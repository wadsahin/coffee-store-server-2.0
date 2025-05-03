const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


// middleware 
app.use(cors());
app.use(express.json());


app.get('/', (req, res)=>{
    res.send("Coffee store server 2.0 is running..");
});

app.listen(port, () =>{
    console.log(`Coffee store server 2.0 is running on port ${port}`);
});