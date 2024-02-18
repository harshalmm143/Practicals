const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the calculator app!');
});

app.get('/add/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    const result = num1 + num2;
    res.send('Result: ' + result);
});

app.get('/subtract/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    const result = num1 - num2;
    res.send('Result: ' + result);
});

app.get('/multiply/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    const result = num1 * num2;
    res.send('Result: ' + result);
});

app.get('/divide/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    if (num2 === 0) {
        res.send('Error: Cannot divide by zero');
    } else {
        const result = num1 / num2;
        res.send('Result: ' + result);
    }
});

const port = 3000;
app.listen(port, () => {
    console.log('Server is running on port', port);
});



// Project  Run Command
// npm start

// Output
//  add value in URL like this
// http://localhost:3000/add/50/10

// result
// Result: 60