const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res)=>{
    res.send('The Chef Server is Onnnnn')
} );

app.listen(port, ()=>{
    console.log(`The port is ${port}`)
})