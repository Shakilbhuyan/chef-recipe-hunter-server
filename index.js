const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;

const chef = require('./Data/chef.json');

app.use(cors());
app.get('/', (req, res)=>{
    res.send('The Chef Server is Onnnnn')
} );

app.get('/chef', (req, res)=>{
    res.send(chef);
})
app.listen(port, ()=>{
    console.log(`The port is ${port}`)
})