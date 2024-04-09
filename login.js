const login = document.getElementById("Login")
const logout = document.getElementById("LogOut")

function fetchAndStore() {
    fetch('login.json')
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('loginData', JSON.stringify(data));
            console.log('Data stored in localStorage successfully!');
        })
        .catch(error => console.log(`Error - ${error}`));
}

function authenticate() {
    const loginData = JSON.parse(localStorage.getItem('loginData'));
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (loginData) {
        if (username === loginData.admin.username && password === loginData.admin.password) {
            // Update log status to true for admin
            loginData.admin.log = true;
            localStorage.setItem('loginData', JSON.stringify(loginData));
            window.location.href = 'Home.html';
        } else if (username === loginData.user.username && password === loginData.user.password) {
            // Update log status to true for user
            loginData.user.log = true;
            localStorage.setItem('loginData', JSON.stringify(loginData));
            window.location.href = 'Home.html';
        } else {
            alert('Invalid username or password');
        }
    } else {
        console.log('Login data not available in localStorage');
    }
}

function handleSubmit(event) {
    event.preventDefault();
    authenticate();
}

fetchAndStore();

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', handleSubmit);

