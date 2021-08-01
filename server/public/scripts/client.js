$(document).ready(onReady);

function onReady() {
    console.log('Ready to Go Captain!');
    $('#addBtn').on('click', addObject);
    $('#subBtn').on('click', subtractObject);
    $('#multBtn').on('click', multiplyObject);
    $('#divBtn').on('click', divideObject);
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
        getAnswer()
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
        getAnswer()
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
        getAnswer()
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
        getAnswer()
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
        .then((response) => {
            console.log('GET /math response', response)

            let priorHistory = $('#history');
            console.log('Prior History element', priorHistory)
            priorHistory.empty();
            for (let history of response) {
                console.log('history is', history)
                priorHistory.append(`
                <li>
                The Answer is ${history.input1} ${history.operation} ${history.input2} = ${history.answer}
                </li>
              `);
            }
        }
        )
};