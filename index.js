const express = require('express');
const morgan = require('morgan');

const app = express();

const PORT = 3005;

app.use(morgan('combined'));

app.get('/home', (req,res) => {
    return res.json({message: 'OK'});
})

app.listen(PORT, () => {
    console.log(`Server stated sucessfully at ${PORT}`);
})