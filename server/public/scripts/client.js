$(document).ready(onReady);

function onReady() {
    console.log('Ready to Go Captain!');
    $('#addBtn').on('click', addObject);
    $('#subBtn').on('click', subtractObject);
    $('#multBtn').on('click', multiplyObject);
    $('#divBtn').on('click', divideObject);
    $('#answerBtn').on('click',getAnswer);

}

function addObject(){
    console.log('inside the adding computer');
    let mathProblem = {
        input1: $('#inputOne').val(),
        input2: $('#inputTwo').val(),
        operation: 'add'
    };
    console.log('the Math Problem is ', mathProblem);
    $.ajax({
        method: 'POST',
        url: '/math',
        data: mathProblem
    }).then((response) => {
    }).catch(error => {
        console.log('POST /math failed', error);
        $('body').append(`
        <h2> 
            Failed to save problem! Check your data, before you wreck your data
        </h2>
        `);
    });
}
function subtractObject() {
    console.log('inside the subtracting computer');
    let mathProblem = {
        input1: $('#inputOne').val(),
        input2: $('#inputTwo').val(),
        operation: 'subtract'
    };
    console.log('the Math Problem is ', mathProblem);
    $.ajax({
        method: 'POST',
        url: '/math',
        data: mathProblem
    }).then((response) => {
    }).catch(error => {
        console.log('POST /math failed', error);
        $('body').append(`
        <h2> 
            Failed to save problem! Check your data, before you wreck your data
        </h2>
        `);
    });
}
function multiplyObject() {
    console.log('inside the multiplication computer');
    let mathProblem = {
        input1: $('#inputOne').val(),
        input2: $('#inputTwo').val(),
        operation: 'multiply'
    };
    console.log('the Math Problem is ', mathProblem);
    $.ajax({
        method: 'POST',
        url: '/math',
        data: mathProblem
    }).then((response) => {
    }).catch(error => {
        console.log('POST /math failed', error);
        $('body').append(`
        <h2> 
            Failed to save problem! Check your data, before you wreck your data
        </h2>
        `);
    });
}
function divideObject() {
    console.log('inside the division computer');
    let mathProblem = {
        input1: $('#inputOne').val(),
        input2: $('#inputTwo').val(),
        operation: 'divide'
    };
    console.log('the Math Problem is ', mathProblem);
    $.ajax({
        method: 'POST',
        url: '/math',
        data: mathProblem
    }).then((response) => {
    }).catch(error => {
        console.log('POST /math failed', error);
        $('body').append(`
        <h2> 
            Failed to save problem! Check your data, before you wreck your data
        </h2>
        `);
    });
}

function getAnswer() {
    console.log('Inside Get Answer');
    $.ajax({
        method: 'GET',
        url: '/math',
    })
        //Network request take a LONG time
        //wait for the request to complete and THEN, run this function
        //Whatever we pass to res.send()
        //becomes the 'response argument
        .then((response) => {
            console.log('GET /math response', response)

            let priorHistory = $('#history');
            console.log('quotes list element', priorHistory)

            for (let history of response) {
                console.log('history is', history)
                quoteList.append(`
                <li>
                    ${mathProblem.input1} ${mathProblem.operation} ${mathProblem.input2} = ${mathProblem.answer}
                </li>
              `);
            }
        }
        )
};