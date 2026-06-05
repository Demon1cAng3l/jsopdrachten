document.querySelector('#box1').style.backgroundColor = "green";
document.querySelector('#box2').style.backgroundColor = "orange";
document.querySelector('#box3').style.backgroundColor = "cyan";
document.querySelector('#box4').style.backgroundColor = "azure";
document.querySelector('body').style.backgroundColor = "black"

document.querySelector('#box1').addEventListener('click', function() {
    document.querySelector("#box2").style.backgroundColor = "rebeccapurple";
});
document.querySelector('#box2').addEventListener('click', function() {
    document.querySelector("#box1").style.backgroundColor = "fuchsia";
    console.log(box1.naam)
});

let auto = {
    "merk": "Nissan",
    "model": "Sylvia S15",
    "bouwjaar": 1999,
    "kleuren": ["rood", "zwart", "wit"]
};

document.querySelector("#box2").addEventListener("click", function () {
    document.querySelector("#box1").innerHTML =
        `<h1>${auto.merk} ${auto.model}</h1>
         <p>Bouwjaar: ${auto.bouwjaar}</p>`;
});

document.querySelector("#box1").addEventListener("click", function () {

    let kleurenHTML = "";
    auto.kleuren.forEach(function (kleur) {
        kleurenHTML += `<li>${kleur}</li>`;
    });

    document.querySelector("#box2").innerHTML =
        `<h1>Kleuren beschikbaar</h1>
         <ul>${kleurenHTML}</ul>`;
});