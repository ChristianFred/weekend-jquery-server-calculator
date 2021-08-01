console.log('Running at full steam!');

const { text } = require('express');
const express = require('express');
const bodyParser = require('body-Parser');
const app = express();

app.get('/math', (req, res) => {
    console.log('Ready to send math', mathProblem);
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
        console.log('Adding Complete', mathProblem);
    }
    else if (mathProblem.operation === "subtract"){
        let mathAnswer = Number(mathProblem.input1) - Number(mathProblem.input2)
        console.log('Subtracting Complete', mathAnswer);
    }
    else if (mathProblem.operation === "multiply") {
        let mathAnswer = Number(mathProblem.input1) * Number(mathProblem.input2)
        console.log('Multiplying Complete', mathAnswer);
    }
    else if (mathProblem.operation === "divide") {
        let mathAnswer = Number(mathProblem.input1) / Number(mathProblem.input2)
        console.log('Dividing Complete', mathAnswer);
    }
    else if (!mathProblem.input1 || !mathProblem.input2 || !mathProblem.operation) {
        res.status(400).send({
            message: "Missing a reported field!."
        });
        return;
    }
    previousAnswers.push(mathProblem);
    console.log(previousAnswers);
    res.sendStatus(201); // 201 Created
});

//Listen for Requests
const port = 5000;
app.listen(port, () => {
    // kind of like our onReady function
    console.log('App is up and Running');
});
