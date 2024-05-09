function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('errorMessage').textContent = ''; // Limpa mensagens de erro ao trocar formulários
    document.getElementById('registerMessage').textContent = '';
}

function showRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('errorMessage').textContent = ''; // Limpa mensagens de erro ao trocar formulários
    document.getElementById('registerMessage').textContent = '';
}

function validateLogin() {
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;
    var validEmail = "aluno@etepd.com";
    var validPassword = "123456";

    if (email === validEmail && password === validPassword) {
        window.location.href = "pagina-seguinte.html";
    } else {
        document.getElementById('errorMessage').textContent = "Usuário não encontrado ou informações de login e senha não foram colocados corretamente.";
    }
}

function registerUser() {
    var email = document.getElementById('registerEmail').value;
    var password = document.getElementById('registerPassword').value;
    var dob = document.getElementById('dob').value;
    var phone = document.getElementById('phone').value;
    var messageElement = document.getElementById('registerMessage');

    if (!email || !password || !dob || !phone) {
        messageElement.textContent = "Todos os campos são obrigatórios.";
        messageElement.style.color = 'red';
        return;
    }

    if (!validateEmail(email)) {
        messageElement.textContent = "Por favor, insira um e-mail válido.";
        messageElement.style.color = 'red';
        return;
    }

    messageElement.textContent = "Foi enviado ao seu e-mail um link de verificação, clique nele para finalizar o seu cadastro.";
    messageElement.style.color = 'green';
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
