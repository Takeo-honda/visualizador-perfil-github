const BASE_URL = 'https://api.github.com';

export async function fetchGithubUser(username) {
  if (!username) {
    throw new Error('Nome de usuário não pode ser vazio.');
  }

  const response = await fetch(`${BASE_URL}/users/${encodeURIComponent(username)}`);

  if (!response.ok) {
    const message = response.status === 404 ? 'Usuário não encontrado.' : 'Erro na API do GitHub.';
    const error = new Error(message);
    error.status = response.status;
    throw error;
  }

  return response.json();
}
