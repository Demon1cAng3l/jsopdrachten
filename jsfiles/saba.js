document.querySelector('#box1').style.backgroundColor = "Green";
document.querySelector('#box2').style.backgroundColor = "#FF8000";
document.querySelector('#box3').style.backgroundColor = "Azure";
document.querySelector('#box4').style.backgroundColor = "Brown";
document.querySelector('body').style.backgroundColor = "black";
document.querySelector('#box1').addEventListener('click', function () {
    document.querySelector('#box2').style.backgroundColor = "rebeccapurple";
    console.log("Changed color");
});
    document.querySelector('#box2').addEventListener('click', function () {
        document.querySelector('#box1').style.backgroundColor = "mediumorchid";
        console.log("Changed color");
});