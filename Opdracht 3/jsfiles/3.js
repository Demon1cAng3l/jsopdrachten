window.addEventListener("load", function () {


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

    });