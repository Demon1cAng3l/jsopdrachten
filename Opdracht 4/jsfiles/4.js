window.addEventListener("load", function () {

    document.querySelector("#box1").addEventListener("click", function () {
        document.querySelector("#box2").innerHTML =
            `<img src="https://cataas.com/cat?${Date.now()}" 
              style="width:100%; height:100%; object-fit:cover;" alt="">`;
    });
});