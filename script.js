function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (name === "") {
        alert("Mohon masukkan nama anda.");
        return false;
    }
    if (password === "") {
        alert("Mohon masukkan password anda.");
        return false;
    }
    
    if (password === "" || password.length < 8) {
        alert("Password harus lebih dari 8 karakter.");
        
        return false;
    }
    
    if (password !== confirmPassword) {
        alert("Password tidak sama.");
        return false;
    }
    
    if (email === "") {
        alert("Mohon masukkan email anda.");
        return false;
    }

    if (email === "" || !emailPattern.test(email)) {
        alert("Mohon masukkan alamat email yang valid.");

        return false;
    }


    alert("Akun Berhasil Dibuat!");
    window.location.href = "lab5_javascript.html";
    return false;
}