const saida = document.getElementById('saida');

// === MÉTODO GET ===
document.getElementById('get').addEventListener('click', async () => {
    saida.textContent = "Buscando usuário...";

    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await res.json();
        saida.textContent = JSON.stringify(data, null, 2);
    } catch (erro) {
        saida.textContent = "Erro ao buscar usuário.";
        console.error(erro);
    }
});

// === MÉTODO POST ===
document.getElementById('post').addEventListener('click', async () => {
    saida.textContent = "Enviando novo usuário...";

    try {
        const novoUsuario = {
            name: "Pedro Amaral",
            email: "pedro@example.com",
            username: "pedropaulo"
        };

        const res = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(novoUsuario)
        });

        const data = await res.json();
        saida.textContent = JSON.stringify(data, null, 2);
    } catch (erro) {
        saida.textContent = "Erro ao criar usuário.";
        console.error(erro);
    }
});

