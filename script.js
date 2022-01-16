const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nomedePersonagem = document.querySelector('#nome');
const nomedeEspecie = document.querySelector('#especie');
const aliveandDead = document.querySelector('#status');


pegarPersonagem = () => {
    return fetch('https://rickandmortyapi.com/api/character/2' , {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;

    });
}

botao.onclick =  pegarPersonagem;