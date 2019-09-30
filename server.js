"use strict"

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hi I am chatbot");
})


app.get('webhook', (req, res) => {
    if (req.query['hub.verify_token'] === 'blondiebytes'){
        res.send(req.query['hub.challenge']);
    }
    res.send("Wrong token");
});
//token
//EAAd2BmUEQe8BAMPomsYmnLXuX4sGWxyORvvejcLYPl9IRPKkZBGgLfylvhy70Miv5ZBho5mGPtW8yGBKiwYu5ykr8hfOWfJB1jgZCZCNTGTcaPrJ99Y9xSUUVCNNnwW2M44UoxuLwUh7ClZCIHOnGG9G7BYBjnzSYhhKNuB0poAZDZD
app.listen(app.get('port'), () => {
    console.log('running: ' + app.get('port'));
});
