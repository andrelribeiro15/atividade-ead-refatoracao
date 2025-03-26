document.addEventListener("DOMContentLoaded", carregarUsuarios);

function adicionarUsuario() {
    let nome = document.getElementById("nomeUsuario").value.trim();
    let email = document.getElementById("emailUsuario").value.trim();

    if (nome === "" || email === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    if (usuarios.some(user => user.email === email)) {
        alert("Este email já está cadastrado!");
        return;
    }

    let novoUsuario = { nome, email };
    usuarios.push(novoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    atualizarListaUsuarios();

    document.getElementById("nomeUsuario").value = "";
    document.getElementById("emailUsuario").value = "";
}

function atualizarListaUsuarios() {
    let listaUsers = document.getElementById("listaUsers");
    listaUsers.innerHTML = "";

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.forEach((user, index) => {
        let novoItem = document.createElement("li");
        novoItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        novoItem.textContent = `${user.nome} - ${user.email}`;

        let btnDelete = document.createElement("button");
        btnDelete.textContent = "Excluir";
        btnDelete.classList.add("btn", "btn-danger", "btn-sm");
        btnDelete.onclick = () => deletarUsuario(index);

        novoItem.appendChild(btnDelete);
        listaUsers.appendChild(novoItem);
    });
}

function deletarUsuario(index) {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.splice(index, 1);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    atualizarListaUsuarios();
}

function carregarUsuarios() {
    atualizarListaUsuarios();
}
