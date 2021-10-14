window.addEventListener("load", function() {
    console.log("Entro")
    var images = [];
    var index = 0;
    var time = 5000;
    images[0] = "images/Yo.jpg";
    images[1] = "images/CodigoPython.jpg";
    images[2] = "images/CodigoJava.png";
    var backImage = document.getElementById("Hero")

    function slideShow(){
        console.log("Tambien")
        backImage.style.backgroundImage = 'url("'+images[index]+'")'
        if (index < 2){
            index += 1;
        }else {
            index = 0;
        }
    }

    setInterval(slideShow, time);
})