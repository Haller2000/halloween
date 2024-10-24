function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("image1")) {
        image.src = "kepek/image2.jfif";
    } else {
        image.src = "kepek/image1.png";
    }
}