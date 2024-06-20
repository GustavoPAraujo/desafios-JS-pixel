const numeroCartao = document.getElementById('numero-cartao')
const nomeTitular = document.getElementById('nome-titular')
const validade = document.getElementById('validade')
const cvv = document.getElementById('cvv')
const adicionarCartao = document.getElementById('adicionar-cartao');

numeroCartao.addEventListener('input', function (e) { 
    let valor = e.target.value.replace(/\s+/g, '');
    valor = valor.replace(/\D/g, ''); 
    if (valor.length > 16) { 
        valor = valor.slice(0, 16);
    }
    const grupos = valor.match(/.{1,4}/g);
    if (grupos) {
        e.target.value = grupos.join(' ');
    } else {
        e.target.value = valor;
    }
});

validade.addEventListener('input', function (e){
    let valor = e.target.value.replace(/\s+/g, '');
    valor = valor.replace(/\D/g, '');
    if (valor.length > 4
    ) { 
        valor = valor.slice(0, 4); 
    }
    const grupos = valor.match(/.{1,2}/g); 
    if (grupos) {
        e.target.value = grupos.join('/'); 
    } else {
        e.target.value = valor;
    }

});

nomeTitular.addEventListener('input', function (e) {
    let valor = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    e.target.value = valor;
});

cvv.addEventListener('input', function (e) {
    let valor = e.target.value.replace(/\D/g, ''); 
    if (valor.length > 3) {
        valor = valor.slice(0, 3);
    }
    e.target.value = valor;
});

adicionarCartao.addEventListener('click', function(e) {
    e.preventDefault();
    let mensagemErro = '';
    if (numeroCartao.value.replace(/\s+/g, '').length !== 16) {
        mensagemErro += 'O número do cartão deve ter 16 dígitos.\n';
    }
    if (nomeTitular.value.trim() === '') {
        mensagemErro += 'O nome do titular não pode estar vazio.\n';
    }
    if (!/^[a-zA-Z\s]+$/.test(nomeTitular.value)) {
        mensagemErro += 'O nome do titular deve conter apenas letras.\n';
    }
    if (validade.value.replace(/\s+/g, '').length !== 5 || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(validade.value)) {
        mensagemErro += 'A validade deve estar no formato MM/AA.\n';
    }
    if (cvv.value.length !== 3) {
        mensagemErro += 'O CVV deve ter 3 dígitos.\n';
    }
    if (mensagemErro) {
        alert(mensagemErro);
    } else {
        alert('Formulário enviado com sucesso!');
        // Aqui você pode adicionar o código para enviar o formulário, por exemplo:
        // document.querySelector('form').submit();
    }
});