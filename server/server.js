console.log('Running at full steam!');

const { text } = require('express');
const express = require('express');
const bodyParser = require('body-Parser');
const app = express();

app.get('/math', (req, res) => {
    console.log('request.route.path is', req.route.path);
    res.send(previousAnswers);
});

let previousAnswers = [];
app.use(express.static('./server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/math', (req, res) => {
    console.log('we got new math to do!');

    console.log('req.body', req.body);
    let mathProblem = req.body;
    let mathAnswer = [];
    if (mathProblem.operation === "add"){
        let mathAnswer = Number(mathProblem.input1) + Number(mathProblem.input2)
        mathProblem.answer = mathAnswer
        console.log('Adding Complete', mathAnswer);
    }
    else if (mathProblem.operation === "subtract"){
        let mathAnswer = Number(mathProblem.input1) - Number(mathProblem.input2)
        mathProblem.answer = mathAnswer
        console.log('Subtracting Complete', mathAnswer);
    }
    else if (mathProblem.operation === "multiply") {
        let mathAnswer = Number(mathProblem.input1) * Number(mathProblem.input2)
        mathProblem.answer = mathAnswer
        console.log('Multiplying Complete', mathAnswer);
    }
    else if (mathProblem.operation === "divide") {
        let mathAnswer = Number(mathProblem.input1) / Number(mathProblem.input2)
        mathProblem.answer = mathAnswer
        console.log('Dividing Complete', mathAnswer);
    }
    previousAnswers.push(mathProblem);
    mathProblem = {};
    console.log('This should be empty', mathProblem );
    console.log(previousAnswers);
    res.sendStatus(201); // 201 Created
});

//Listen for Requests
const port = 5000;
app.listen(port, () => {
    // kind of like our onReady function
    console.log('App is up and Running');
});
