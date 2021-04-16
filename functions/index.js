const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: true
}));


let myMiddleware = (req, res, next) => {
    next();
}

app.use(myMiddleware);


app.get('/', (req, res) => {
    let response = "Server deployed successfully ";
    res.send(response);
});

app.get('/:id', (req, res) => {
    let id = req.params.id;
    //let response;
    res.send(response);
});

app.post('/add', (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num1;
    let response = num1 + num2
    res.send(response);
});

app.post('/multiply', (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num1;
    let response = num1 * num2
    res.send(response);
});

app.post('/subtract', (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num1;
    let response = num1 - num2
    res.send(response);
});

app.post('/divide', (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num1;
    let response = num1 / num2
    res.send(response);
});



app.put('/:id', (req, res) => {
    let id = req.params.id;
    //let response;
    res.send(response);
});

app.delete('/:id', (req, res) => {
    let id = req.params.id;
    //let response;
    res.send(response);
});


// Expose Express API as a single Cloud Function:
exports.endpoints = functions.https.onRequest(app);


