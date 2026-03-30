import { fetchGithubUser } from './githubApi.js';
import { elements, showLoading, renderProfile, showError, clearInput } from './ui.js';

async function searchHandler() {
  const username = elements.inputSearch.value.trim();

  if (!username) {
    showError('Por favor, digite um usuário do GitHub.');
    return;
  }

  try {
    showLoading();
    const userData = await fetchGithubUser(username);
    renderProfile(userData);
    clearInput();
  } catch (error) {
    console.error('Erro ao buscar perfil do GitHub:', error);
    if (error.status === 404) {
      showError('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
    } else {
      showError('Ocorreu um erro ao buscar o perfil. Por favor, tente novamente.');
    }
  }
}

function init() {
  elements.btnSearch.addEventListener('click', searchHandler);
  elements.inputSearch.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      searchHandler();
    }
  });
}

init();
