function draw(){
    var mapCanvas,
        mapContext,
        maskCanvas,
        maskContext,
        mapImg;

    // create mask
    maskCanvas = document.getElementById('mask');
    maskContext = maskCanvas.getContext('2d');

    // black out canvas
    maskContext.fillStyle = '#f2e4b3';
    maskContext.fillRect(0, 0, 350, 150);
    // add a transparent section
    // maskContext.fillStyle = 'rgba(225,225,225,1)';
    // maskContext.fillRect(50,50,75,50);
    maskContext.clearRect(50,50,75,50)

    // create background map
    mapCanvas = document.getElementById('map');
    mapContext = mapCanvas.getContext('2d');

    mapImg = document.getElementById('img');
    mapContext.drawImage(mapImg, 0, 0);

    // lay mask over
    mapContext.drawImage(maskCanvas, 0, 0);    
}

window.onload = draw;

