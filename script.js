// create a wrapper around native canvas element (with id="c")
let canvas = new fabric.Canvas('c');
let htmlCanvas = document.getElementById('c');

function init() {
    
  resizeCanvas();
}

function addItem(image) {
  fabric.Image.fromURL(image, function(oImg) {
    // scale image down, and flip it, before adding it onto canvas
    oImg.scale(0.5).set('flipX', true);
    canvas.add(oImg);
  }); 
}

function resizeCanvas() {

  htmlCanvas.width = window.innerWidth;
  htmlCanvas.height = window.innerHeight;

  canvas.setWidth(window.innerWidth);
  canvas.setHeight(window.innerHeight);
  canvas.calcOffset();
}



init();
