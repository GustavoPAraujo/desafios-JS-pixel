const inputMensagem = document.querySelector(".input-mensagem");
const botaoEnviar = document.querySelector(".enviar");
const chat = document.querySelector(".chat");

function enviarMensagem() {
    const textoDigitado = inputMensagem.value;

    if (textoDigitado.trim() !== "") {
        const novaMensagem = document.createElement("div");
        novaMensagem.classList.add("mensagem-digitada-container", "mensagem-digitada-contato");
        novaMensagem.textContent = textoDigitado;

        const tempoMensagem = document.createElement("p");
        tempoMensagem.classList.add("tempo-mensagem");
        const dataHora = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        tempoMensagem.textContent = `Você - ${dataHora}`;

        const novaDivMensagem = document.createElement("div");
        novaDivMensagem.classList.add("mensagem-digitada");
        novaDivMensagem.appendChild(tempoMensagem);
        novaDivMensagem.appendChild(novaMensagem);

        chat.appendChild(novaDivMensagem);

        inputMensagem.value = "";

        chat.scrollTop = chat.scrollHeight;
    }
}

botaoEnviar.addEventListener("click", enviarMensagem);

inputMensagem.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        enviarMensagem();
    }
});
