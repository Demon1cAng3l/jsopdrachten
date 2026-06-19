window.addEventListener("load", function () {

    const POKE_API = "https://pokeapi.co/api/v2/pokemon/";

    document.querySelector("#zoekknop").addEventListener("click", async function () {
        let term = document.querySelector("#zoekterm").value.toLowerCase();

        let response = await fetch(POKE_API + term);
        let data = await response.json();

        toonPokemon(data);
    });

    function toonPokemon(data) {
        let div = document.querySelector("#resultaten");

        div.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.sprites.front_default}" alt="">
        <p>Gewicht: ${data.weight}</p>
    `;
    }});