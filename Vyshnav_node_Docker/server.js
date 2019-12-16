const express = require('express');
const app = express();
const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

app.get('/', (req, res) => {

    res.send('<body bgcolor="#E83350"><h1 align="center"><strong>WELCOME TO INFOSECIANS , HAPPY HACKING!!</strong></h1>');

});
app.get('/hack', (req, res) => {
    res.send('<body bgcolor="green">');
});