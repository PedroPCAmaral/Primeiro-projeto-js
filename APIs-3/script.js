document.getElementById('btn').addEventListener('click', async () => {

  const container = document.getElementById('usuarios');
  container.innerHTML = '<p>Carregando usuários...</p>';

  try {
    // Faz a requisição para a API RandomUser
    const res = await fetch('https://randomuser.me/api/?results=5');
    const dados = await res.json();

    // Limpa o conteúdo antes de exibir
    container.innerHTML = '';

    // Percorre cada resultado e cria um card
    dados.results.forEach(user => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <img src="${user.picture.large}" alt="Foto de ${user.name.first}">
        <h3>${user.name.first} ${user.name.last}</h3>
        <p><strong>País:</strong> ${user.location.country}</p>
      `;

      // Adiciona o card no container
      container.appendChild(card);
    });

  } catch (erro) {
    container.innerHTML = '<p> Erro ao carregar usuários!</p>';
    console.error(erro);
  }
});
