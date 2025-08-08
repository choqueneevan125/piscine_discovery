function RandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

$(document).ready(function () {
    $('.btn-change').click(function() {
        const newColor = RandomColor();
        $('body').css('background-color', newColor);
    });
});