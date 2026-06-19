window.addEventListener("load", function () {

    // --- BOX KLEUR EVENTS ---
    document.querySelector('#box1').addEventListener('click', function () {
        document.querySelector("#box2").style.backgroundColor = "rebeccapurple";
    });

    document.querySelector('#box2').addEventListener('click', function () {
        document.querySelector("#box1").style.backgroundColor = "fuchsia";
    });
});
