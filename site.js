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

function toggleSidebar() {
    let sidebar = document.getElementsByClassName('sidebar-container')[0];

    if (sidebar.classList.contains('hidden')) {
        sidebar.classList.remove('hidden');
    } else {
        sidebar.classList.add('hidden');
    }

    console.log(sidebar);
}

function alertDemo() {
    alert('This is a demo version. This functionality is only available in the full version.')
}

function assignEventHandler(className, eventHandler) {
    let elements = document.getElementsByClassName(className);

    for (let element of elements) {
        element.addEventListener('click', eventHandler);
    }
}

(function main(){
    assignEventHandler('inactive-link', alertDemo);
})();