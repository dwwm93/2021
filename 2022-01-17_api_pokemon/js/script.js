
/**
 * @typedef {{count: number, next: string, previous: string, results: Array<{name: string, url:string}>}} ApiData
 */

/**
 * 
 * @param {ApiData} apiData 
 */
function traiteApiData(apiData){
    const total = apiData.count;
    const pokemons = apiData.results;

    let html = `<h2>Il y a ${total} pocket monsters !</h2>`;
    const main = document.querySelector('main#pokemons');
    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        html += `
            <article id="${pokemon.name}">
                <header></header>
                <content><a href="${pokemon.url}">${pokemon.name}</a></content>
            </article>
        `;
    }
    main.innerHTML = html;
    afficheImages(apiData);
}

/**
 * 
 * @param {ApiData} apiData 
 * @returns {void}
 */
function afficheImages(apiData){
    const pokemons = apiData.results;
    pokemons.forEach(function (pokemon){
        $.get(`${pokemon.url}`, function (data){
            const image = data.sprites.front_default;
            document.querySelector(`#${data.name} > header`).innerHTML = `
                <img src="${image}" />
            `
        })
    })
}

function affichePokemons(){
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20';
    $.get(url, traiteApiData);
    console.log("fin de affiche Pokemons");
}
affichePokemons();

function afficheChargement(){
    const nav = document.querySelector('nav');
    nav.innerHTML = `
        <button>Chargement</button>
    `;
    $('button').on('click', function (){
        $(this).addClass('clicked');
    });
    console.log("Fin de chargement");
}
afficheChargement();