function validate(e) {
    e.preventDefault();

    const name = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const msgBox = document.getElementById('message');

    letmessage = '';
    if (name === '') {
        message = 'Please enter name'
        msgBox.style.color = 'red';
    } else if (age === '') {
        message = 'Age must be over 18';
        msgBox.style.color = 'red';
    }
    else {
        message = 'Validation successful'
        msgBox.style.color = 'green';
    }
    msgBox.innerText = message;}
