const username = 'JoaoTrombeta';

const tokenPt1 = 'github_'
const tokenPt2 = 'pat_11BPN5WLA0ry8K'
const tokenPt3 = '03MEOr9V_HJEJW7ly8wCIUiV'
const tokenPt4 = 'YzbiO7O9P4a8aID3PmyVXMy8SvQtPR2F'

const token = tokenPt1 + tokenPt2 + tokenPt3 + tokenPt4 + 'DCPO3Dpp5p6J'; // Substitua pelo seu token de acesso pessoal

var contagem = 0;

document.addEventListener('DOMContentLoaded', () => {
  // Chama a função para buscar e exibir os repositórios
  fetchRepos();
});

// Função para buscar os repositórios na GitHub API
async function fetchRepos() {
    const response = await fetch(`https://api.github.com/users/${username}/repos`, {
        method: 'GET',
        headers: {
            'Accept-Language': 'pt-BR',  // Solicitar conteúdo em português
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': `Bearer ${token}`  // Cabeçalho de autenticação
        }
    });

    if (response.ok) {
        const repos = await response.json();
        displayRepos(repos);
    } else {
        console.error('Erro ao buscar os repositórios');
    }
}

// Função para exibir os repositórios e os READMEs na página
async function displayRepos(repos) {
    const repoListElement = document.getElementById('projetos');
    
    for (const repo of repos) {
        const repoItem = document.createElement('div');
        repoItem.classList.add('card');
        const repoCount = document.createElement('p');
        repoCount.classList.add('repoCount');
    
        // Link para o repositório
        const repoLink = document.createElement('a');
        const repoLinkButton = document.createElement('button');
        repoLink.href = repo.html_url;
        repoLink.target = '_blank';
        repoLinkButton.textContent = repo.name;
        contagem++;
        repoCount.textContent = contagem + ".";
    
        // Adiciona o link do repositório à lista
        repoLink.appendChild(repoLinkButton);
        repoItem.appendChild(repoLink);
        repoItem.appendChild(repoCount);
        
        // Busca o README.md do repositório
        const readmeContent = await fetchReadme(repo);
        if (readmeContent) {
            const readmeElement = document.createElement('div');
            readmeElement.classList.add('readme-content');
            readmeElement.textContent = readmeContent;
            repoItem.appendChild(readmeElement);
        }
    
        repoListElement.appendChild(repoItem);
    }
}

// Função para buscar o conteúdo do README.md
async function fetchReadme(repo) {
    const readmeUrl = `https://api.github.com/repos/${repo.owner.login}/${repo.name}/contents/README.md`;
    
    const response = await fetch(readmeUrl, {
        method: 'GET',
        headers: {
            'Accept-Language': 'pt-BR',  // Solicita o conteúdo em português
            'Authorization': `Bearer ${token}`  // Cabeçalho de autenticação
        }
    });

    if (response.ok) {
        const readmeData = await response.json();
        if (readmeData.content) {
            // Decodifica o conteúdo Base64 do README.md
            const decodedContent = atob(readmeData.content);
            return decodedContent;
        }
    } else {
        console.error(`Erro ao buscar README.md para o repositório ${repo.name}`);
    }
    return null;
}
