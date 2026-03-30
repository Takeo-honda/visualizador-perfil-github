const btnSearch = document.getElementById('btn-search');
const inputSearch = document.getElementById('input-search');
const profileResults = document.querySelector('.profile-results');

const baseUrl = 'https://api.github.com';

btnSearch.addEventListener('click', async () => {
    const username = inputSearch.value;
    if (username) {
        try {
            profileResults.innerHTML = '<p class="loading-message">Carregando dados do usuário...</p>';
            
            const response = await fetch(`${baseUrl}/users/${username}`)
            // Aqui você pode adicionar a lógica para buscar o perfil do GitHub usando o valor de searchTerm
            if (!response.ok) {
                profileResults.innerHTML = '';
                alert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
                return;
            }
        const userData = await response.json();
        console.log(userData);

        profileResults.innerHTML = `
        <div class="profile-card">
        
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name}</h2>
                <p>${userData.bio || 'Nao possui bio cadastrada 🥲 '}</p>
            </div>
                
            </div>`;
        
        
        
    } catch (error) {
            console.error('Erro ao buscar perfil do GitHub:', error);
            alert('Ocorreu um erro ao buscar o perfil. Por favor, tente novamente.');
        }
    }
});

