# 🔍 Visualizador de Perfil do GitHub

Uma aplicação web simples e elegante que consome a API do GitHub para buscar e exibir informações detalhadas de perfis de usuários, incluindo estatísticas e repositórios recentes.

## 🚀 Funcionalidades

- **Busca por Usuário:** Localize qualquer perfil do GitHub pelo nome de usuário.
- **Integração com Teclado:** Pesquisa rápida ao pressionar a tecla `Enter`.
- **Informações do Perfil:** Exibe avatar, nome, biografia, seguidores e seguindo.
- **Repositórios:** Lista os 10 repositórios mais recentes com estatísticas de:
  - ⭐ Stars
  - 🍴 Forks
  - 👀 Watchers
  - 💻 Linguagem predominante
- **Design Responsivo:** Adaptado para diferentes tamanhos de tela.
- **Feedback Visual:** Indicador de carregamento e mensagens de erro amigáveis.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica.
- **CSS3:** Estilização personalizada, animações e layout responsivo.
- **JavaScript (ES6+):** Lógica da aplicação utilizando Módulos e Async/Await.
- **GitHub API:** Fonte de dados para perfis e repositórios.
- **DevIcons:** Ícones de tecnologias.

## 📂 Estrutura do Projeto

```text
├── index.html          # Página principal
├── src/
│   ├── css/            # Estilos (Reset, Styles, Animations, Responsive)
│   └── js/
│       ├── index.js     # Ponto de entrada e eventos
│       ├── githubApi.js # Comunicação com a API do GitHub
│       └── profileView.js # Lógica de renderização na tela
└── README.md
```

## 🔧 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/visualizador-perfil-github.git
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd visualizador-perfil-github
   ```
3. Abra o arquivo `index.html` em seu navegador ou utilize a extensão **Live Server** no VS Code para uma melhor experiência.

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
Desenvolvido por [George Takeo Honda] 🚀
