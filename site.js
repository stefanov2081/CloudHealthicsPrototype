function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username == 'demo' && password == 'demo') {
        console.log('inside if');
        window.location.href = './explore.html';
    } else {
        document.getElementById('validation-error-message').classList.remove('hidden');
    }
}

function alertDemo() {
    alert('This is a demo version. This functionality is only available in the full version.')
}