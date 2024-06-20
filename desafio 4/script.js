function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
    const emailError = document.getElementById('emailError');
    const senhaError = document.getElementById('senhaError');

    emailError.textContent = '';
    senhaError.textContent = '';

    if (email.value.trim() === '') {
        emailError.textContent = 'Por favor, insira seu e-mail.';
        email.focus();
        event.preventDefault();
        return;
    }

    if (!isValidEmail(email.value.trim())) {
        emailError.textContent = 'Por favor, insira um email válido.';
        email.focus();
        event.preventDefault();
        return;
    }

    if (senha.value.trim() === '') {
        senhaError.textContent = 'Por favor, insira sua senha.';
        senha.focus();
        event.preventDefault();
        return;
    }

    alert('Formulário enviado com sucesso!');
});
