export const elements = {
  btnSearch: document.getElementById('btn-search'),
  inputSearch: document.getElementById('input-search'),
  profileResults: document.querySelector('.profile-results'),
};

export function showLoading() {
  elements.profileResults.innerHTML = '<p class="loading-message">Carregando dados do usuário...</p>';
}

export function showError(message) {
  elements.profileResults.innerHTML = '';
  alert(message);
}

export function renderProfile(userData) {
  const bio = userData.bio || 'Não possui bio cadastrada 🥲';

  elements.profileResults.innerHTML = `
    <div class="profile-card">
      <img src="${userData.avatar_url}" alt="Avatar de ${userData.name || userData.login}" class="profile-avatar">
      <div class="profile-info">
        <h2>${userData.name || userData.login}</h2>
        <p>${bio}</p>
      </div>
    </div>

    <div class="profile-counters">
      <div class="followers">
        <h4>👨‍👩 Seguidores</h4>
        <span>${userData.followers}</span>
      </div>
      <div class="following">
        <h4>👨‍👩 Seguindo</h4>
        <span>${userData.following}</span>
      </div>
    </div>
  `;
}

export function clearInput() {
  elements.inputSearch.value = '';
}
