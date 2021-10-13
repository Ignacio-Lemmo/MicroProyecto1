window.addEventListener("load", function() {

    var images = [];
    var index = 0;
    var time = 5000;
    images[0] = "images/Yo.jpg";
    images[1] = "images/CodigoPython.jpg";
    images[2] = "images/CodigoJava.jpg";
    var image = document.querySelector("#Hero")

    function slideShow(){
        image.style.backgroundImage = "url(${images[index]})";
        if (index < 2){
            index += 1;
        }else {
            index = 0;
        }
    }

    setInterval(slideShow, time);
})