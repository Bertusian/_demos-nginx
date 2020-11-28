function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "./_img/Pic1.jpg"
    } else {
        pic = "./_img/Pic2.jpg"
    }
    document.getElementById('myImage').src = pic;
}
