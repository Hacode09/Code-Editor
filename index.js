function login() {
    var uname = document.getElementById('first').value;
    if (uname) {
        location.assign('./home.html');
    } else {
        window.alert("Login faild");
    }
}