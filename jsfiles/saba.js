document.querySelector('#box1').style.backgroundColor = "green";
document.querySelector('#box2').style.backgroundColor = "orange";
document.querySelector('#box3').style.backgroundColor = "fuchsia";
document.querySelector('#box4').style.backgroundColor = "azure";
document.querySelector('body').style.backgroundColor = "black"

document.querySelector('#box1').addEventListener('click', function() {
    document.querySelector("#box2").style.backgroundColor = "rebeccapurple";
});
document.querySelector('#box2').addEventListener('click', function() {
    document.querySelector("#box1").style.backgroundColor = "mediumorchid";
});
