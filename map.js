var maskClicks = [{x: 10, y: 10}, {x:100, y: 70}];

function init(){
    draw();
    document.getElementById('map').addEventListener('click', mapClick, false);
}

function draw(){
    var mapCanvas,
        mapContext,
        maskCanvas,
        maskContext,
        mapImg;

    // create mask
    maskCanvas = document.getElementById('mask');
    maskContext = maskCanvas.getContext('2d');
    createMask(maskContext);

    // create background map
    mapCanvas = document.getElementById('map');
    mapContext = mapCanvas.getContext('2d');

    mapImg = document.getElementById('img');
    mapContext.drawImage(mapImg, 0, 0);

    // lay mask over
    mapContext.drawImage(maskCanvas, 0, 0);    
}

function mapClick(event){
    console.log('click', event);
}

function createMask(context){
    // black out canvas
    context.fillStyle = '#f2e4b3';
    context.fillRect(0, 0, 350, 150);

    for(let i = 0;i < maskClicks.length;i++){
        // add transparent sections
        let x = maskClicks[i].x;
        let y = maskClicks[i].y;
        context.clearRect(x, y, 50, 50);
    }
}

window.onload = init;

