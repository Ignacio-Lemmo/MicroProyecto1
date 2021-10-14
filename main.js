window.addEventListener("load", function() {
    var images = [];
    var index = 0;
    var time = 5000;
    images[0] = "images/Yo.jpg";
    images[1] = "images/CodigoPython.jpg";
    images[2] = "images/CodigoJava.png";
    var backImage = document.getElementById("Hero");

    function slideShow(){
        backImage.style.backgroundImage = 'url("'+images[index]+'")';
        if (index < 2){
            index += 1;
        }else {
            index = 0;
        }
    }

    setInterval(slideShow, time);
})
    var button = document.getElementById("send");
    function obtenerDatos(){
        var fullName = document.getElementById("fullName").value;
        var mail = document.getElementById("mail").value;
        var message = document.getElementById("message").value;
        if (!(fullName === "") && mail.includes("@") && !(message === "")){
            console.log(fullName);
            console.log(mail);
            console.log(message);
            alert("Solicitud enviada con exito"); 
            document.getElementById("fullName").remove;
            mail = document.getElementById("mail").remove;
            document.getElementById("message").remove;
        }else {
            alert("Datos Invalidos")
        }
    }