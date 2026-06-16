window.addEventListener("load", function () {

    // --- KLEUREN ---
    document.querySelector('#box1').style.backgroundColor = "green";
    document.querySelector('#box2').style.backgroundColor = "orange";
    document.querySelector('#box3').style.backgroundColor = "cyan";
    document.querySelector('#box4').style.backgroundColor = "azure";
    document.querySelector('body').style.backgroundColor = "black";

    // --- BOX KLEUR EVENTS ---
    document.querySelector('#box1').addEventListener('click', function() {
        document.querySelector("#box2").style.backgroundColor = "rebeccapurple";
    });

    document.querySelector('#box2').addEventListener('click', function() {
        document.querySelector("#box1").style.backgroundColor = "fuchsia";
    });

    // --- JSON OBJECT ---
    let auto = {
        "merk": "Nissan",
        "model": "Sylvia S15",
        "bouwjaar": 1999,
        "kleuren": ["rood", "zwart", "wit"]
    };

    // --- AUTO INFO TONEN ---
    document.querySelector("#box2").addEventListener("click", function () {
        document.querySelector("#box1").innerHTML =
            `<h3>${auto.merk} ${auto.model}</h3>
             <p>Bouwjaar: ${auto.bouwjaar}</p>`;
    });

    document.querySelector("#box1").addEventListener("click", function () {

        let kleurenHTML = "";
        auto.kleuren.forEach(function (kleur) {
            kleurenHTML += `<li>${kleur}</li>`;
        });

        document.querySelector("#box2").innerHTML =
            `<h3>Kleuren beschikbaar</h3>
             <ul>${kleurenHTML}</ul>`;
    });

    // --- CAT API ---
    document.querySelector("#box3").addEventListener("click", function () {
        document.querySelector("#box4").innerHTML =
            `<img src="https://cataas.com/cat?${Date.now()}" 
              style="width:100%; height:100%; object-fit:cover;" alt="">`;
    });

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