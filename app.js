document.getElementById('passwordForm').addEventListener('submit', function(event) {
    var passwordInput = document.getElementById('password');
    var password = passwordInput.value;
    if (password.length >= 7 && password.length <= 16) {
        window.open("usuario_logado.html", "_blank");
    } else {
        alert('A senha deve ter entre 8 e 16 caracteres.');
        event.preventDefault(); 
    }
});
