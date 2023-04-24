function imageEnlarge() {
    var myImg = document.getElementById(id);
    if (myImg.clientHeight == 500) {
        return;
    }
    else {
        myImg.style.width = (currWidth + 400) + "px";
    }
    alert("func triggered")
}