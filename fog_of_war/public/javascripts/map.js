var maskClicks = [];
var map;
var offsets;

function handleImage(e){
    var map = document.getElementById('map'),
        ctx = map.getContext('2d'),
        playerMap = document.getElementById('playerMap'),
        mask = document.getElementById('mask');
    
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
            map.width = img.width;
            map.height = img.height;
            ctx.drawImage(img,0,0);


            playerMap.width = img.width;
            playerMap.height = img.height;
            mask.width = img.width;
            mask.height = img.height;
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);     
}


function init(){
    map = document.getElementById('map');
    offsets = {
        left: map.offsetLeft,
        top: map.offsetTop
    };
    draw();
    map.addEventListener('click', mapClick, false);


    var imageLoader = document.getElementById('imageLoader');
        imageLoader.addEventListener('change', handleImage, false);

}

function draw(){
    var mapCanvas,
        mapContext,
        maskCanvas,
        maskContext,
        mapImg,
        playerMapCanvas,
        playerMapContext;

    // create mask
    maskCanvas = document.getElementById('mask');
    maskContext = maskCanvas.getContext('2d');
    createMask(maskCanvas, maskContext);

    // create background map
    mapCanvas = document.getElementById('map');
    playerMapCanvas = document.getElementById('playerMap')
    playerMapContext = playerMapCanvas.getContext('2d');
    playerMapContext.drawImage(mapCanvas, 0, 0);

    // lay mask over
    playerMapContext.drawImage(maskCanvas, 0, 0);    
}

function mapClick(event){
    let x = event.pageX - offsets.left;
    let y = event.pageY - offsets.top;
    maskClicks.push({x: x, y: y});
    draw();
}

function createMask(canvas, context){
    // black out canvas
    context.fillStyle = '#f2e4b3';
    context.fillRect(0, 0, canvas.width, canvas.height);

    for(let i = 0;i < maskClicks.length;i++){
        // add transparent sections
        let x = maskClicks[i].x - 25;
        let y = maskClicks[i].y - 25;
        context.clearRect(x, y, 50, 50);
    }
}

window.onload = init;

