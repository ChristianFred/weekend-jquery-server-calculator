console.log('Running at full steam!');

const { text } = require('express');
const express = require('express');
const bodyParser = require('body-Parser');


const app = express();
let collectedMath = [];
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
        console.log('Adding Complete', mathAnswer);
        return mathAnswer
    }
    else if (mathProblem.operation === "subtract"){
        let mathAnswer = Number(mathProblem.input1) - Number(mathProblem.input2)
        console.log('Subtracting Complete', mathAnswer);
        return mathAnswer
    }
    else if (mathProblem.operation === "multiply") {
        let mathAnswer = Number(mathProblem.input1) * Number(mathProblem.input2)
        console.log('Multiplying Complete', mathAnswer);
        return mathAnswer
    }
    else if (mathProblem.operation === "division") {
        let mathAnswer = Number(mathProblem.input1) / Number(mathProblem.input2)
        console.log('Dividing Complete', mathAnswer);
        return mathAnswer
    }
    else if (!mathProblem.input1 || !mathProblem.input2 || !mathProblem.operation) {
        res.status(400).send({
            message: "Missing a reported field!."
        });
        return;
    }
    res.sendStatus(201); // 201 Created

    app.get('/math', (req, res) => {
        console.log('Ready to send math', mathAnswer);
        console.log('request.route.path is', req.route.path);
        res.send(mathAnswer);
    });

});
//Listen for Requests
const port = 5000;
app.listen(port, () => {
    // kind of like our onReady function
    console.log('App is up and Running');
});
