function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("Please fill in all fields.");
        return false;
    }

    // Add more validation logic here if needed

    alert("Login Successful!");
    return true;
}
