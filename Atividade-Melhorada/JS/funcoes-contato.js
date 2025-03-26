

function enviaProBack(event) {
    event.preventDefault(); // Impede envio automático

    const nome = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (nome === "" || email === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (!verificaUsuarioExistente(email)) {
        alert("Este email não está cadastrado! Faça seu cadastro primeiro.");
        return;
    }

    alert("Formulário enviado com sucesso!");
    document.querySelector("form").submit(); // Agora pode enviar

   window.location.href = "cadastro-usuario.html";
}

// Função para verificar se o email está cadastrado
function verificaUsuarioExistente(email) {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    return usuarios.some(user => user.email === email);
}
