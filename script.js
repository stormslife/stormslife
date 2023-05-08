//GALLERY

let agent = navigator.userAgent;
alert(navigator.platform);

var isEnlarged = false;
var enlargedImage = "";

function enlarge(id) {
    
    if (isEnlarged) {
        if (enlargedImage == id) {
            document.getElementById(enlargedImage).style.height = "70%";
            document.getElementById(enlargedImage).style.width = "10%";
            document.getElementById(enlargedImage).style.position = "static";
            document.getElementById(enlargedImage).style.top = "0";
            document.getElementById(enlargedImage).style.left = "0";
        }
        else {
            document.getElementById(enlargedImage).style.height = "70%";
            document.getElementById(enlargedImage).style.width = "10%";
            document.getElementById(enlargedImage).style.position = "static";
            document.getElementById(enlargedImage).style.top = "0";
            document.getElementById(enlargedImage).style.left = "0";
            
            document.getElementById(id).style.height = "90%";
            document.getElementById(id).style.width = "35%";
            document.getElementById(id).style.position = "absolute";
            document.getElementById(id).style.top = "70%";
            document.getElementById(id).style.left = "30%";
        }
    }

    else {
        document.getElementById(id).style.height = "90%";
        document.getElementById(id).style.width = "35%";
        document.getElementById(id).style.position = "absolute";
        document.getElementById(id).style.top = "70%";
        document.getElementById(id).style.left = "30%";
        isEnlarged = true;
    }

    enlargedImage = id;
}
