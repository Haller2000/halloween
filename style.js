function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("image1")) {
        image.src = "image2.jpg";
    } else {
        image.src = "image1.jpg";
    }
}