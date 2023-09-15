function init() {
    // create a wrapper around native canvas element (with id="c")
    var canvas = new fabric.Canvas('c');

    

    fabric.Image.fromURL('images/ветка 2.png', function(oImg) {
        // scale image down, and flip it, before adding it onto canvas
        oImg.scale(0.15).set('flipX', true);
        canvas.add(oImg);
      });

    fabric.Image.fromURL('images/бутон 2.png', function(oImg) {
        // scale image down, and flip it, before adding it onto canvas
        oImg.scale(0.15).set('flipX', true);
        canvas.add(oImg);
      });  
 
      
}

init();
