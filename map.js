function draw(){
    var canvas = document.getElementById('map');
    var context = canvas.getContext('2d');

    context.fillRect(0, 0, 350, 150);

    context.fillStyle = 'rgba(225,225,225,1)';
    context.fillRect(50,50,75,50);
    context.globalAlpha = 1.0;
}

window.onload = draw;

