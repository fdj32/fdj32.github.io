function randomColor() {
    var r = Math.floor(Math.random() * 64) + 192;
    var g = Math.floor(Math.random() * 64) + 192;
    var b = Math.floor(Math.random() * 64) + 192;
    return "rgb(" + r + "," + g + "," + b + ")";
}
