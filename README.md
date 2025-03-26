README
Projeto: Formulário de Contato e Cadastro de Usuários
Este projeto consiste em um conjunto de páginas HTML com funcionalidades de cadastro e contato de usuários. Ele inclui validação de formulário, navegação entre páginas, e a integração de funcionalidades de cadastro com uma lista de usuários.

Estrutura do Projeto
O projeto contém as seguintes páginas principais:

index.html: Página inicial do site.

contato.html: Página de contato com formulário de envio de mensagem.

sobre.html: Página de informações sobre o site.

cadastro-usuario.html: Página de cadastro de usuários, onde os dados dos usuários são armazenados e exibidos em uma lista.

Diretórios e Arquivos:
css/: Pasta contendo os arquivos de estilo (CSS) para personalizar a aparência das páginas.

js/: Pasta contendo arquivos JavaScript para implementar a funcionalidade, como validações e manipulação do DOM.

Páginas do Projeto
1. index.html - Página Inicial
A página inicial apresenta uma barra de navegação que leva os usuários às páginas de Contato, Sobre e Cadastro de Usuários.

Funcionalidades:
Navegação entre páginas usando a barra de navegação (utilizando o framework Bootstrap).

Layout responsivo.

2. contato.html - Formulário de Contato
A página de Contato permite que o usuário envie uma mensagem com seu nome, e-mail e conteúdo da mensagem.

Funcionalidades:
Validação de campos: Garante que os campos obrigatórios (nome, e-mail e mensagem) sejam preenchidos antes de enviar o formulário.

Verificação de cadastro de usuário: Antes de enviar a mensagem, o sistema verifica se o e-mail inserido já foi cadastrado. Caso contrário, um alerta é exibido informando o usuário.

Navegação: Após o envio bem-sucedido do formulário, o usuário será redirecionado para a página cadastro-usuario.html.

Scripts:
funcoes-contato.js: Implementa a validação de formulário e a lógica de redirecionamento.

utilsScript.js: Funções auxiliares, como a verificação de cadastro de usuários.

3. sobre.html - Página Sobre
A página de Sobre contém informações gerais sobre o site ou a aplicação.

Funcionalidade:
Informações estáticas sobre o projeto.

Inclui a mesma barra de navegação do index.html para facilitar o acesso às outras páginas.

4. cadastro-usuario.html - Cadastro de Usuários
A página de Cadastro de Usuários permite que os administradores ou usuários cadastrem novos usuários no sistema, armazenando os dados na interface (em um formato de lista).

Funcionalidades:
Cadastro de usuários: O nome e o e-mail do usuário são inseridos e listados na página.

Validação: Garante que todos os campos obrigatórios sejam preenchidos antes de adicionar o usuário.

Deleção: Permite excluir usuários da lista.

Validação de e-mail: Verifica se o e-mail inserido já foi cadastrado e avisa o usuário caso o e-mail não exista.

Scripts:
cadastro-usuario.js: Manipulação de dados do cadastro (adicionar e deletar usuários).

Tecnologias Utilizadas
HTML5: Para a estruturação das páginas.

CSS3: Para estilização das páginas (com uso de Bootstrap para layout responsivo).

JavaScript: Para manipulação de eventos, validações e lógica de navegação.

Bootstrap: Para facilitar a criação de uma barra de navegação e melhorar o layout da interface.

Instalação e Execução
1. Clonando o repositório
bash
Copiar
Editar
git clone https://github.com/SEU_USUARIO/projeto.git
2. Abrindo as páginas
Abra os arquivos HTML diretamente no seu navegador:

index.html: Página inicial

contato.html: Página de contato

sobre.html: Página de sobre

cadastro-usuario.html: Página de cadastro de usuários

Funcionalidades de Validação
Contato: Verifica se o e-mail fornecido no formulário de contato está cadastrado antes de permitir o envio da mensagem.

Cadastro de Usuário: Permite o cadastro de usuários e valida se o e-mail inserido já existe.

Deleção: Permite a exclusão de usuários da lista.

Como Contribuir
Se você quiser contribuir com o projeto, basta seguir os passos abaixo:

Faça um fork do repositório.

Crie uma nova branch (git checkout -b minha-branch).

Faça as alterações desejadas e commit (git commit -am 'Adiciona minha funcionalidade').

Push para o repositório remoto (git push origin minha-branch).

Abra um pull request.

