//dibuja el canvas
var stage = new Konva.Stage({
  container: 'miCanvas',
  width:400,
  height:380
});
//crea y añade un layer
var layer = new Konva.Layer();
stage.add(layer);
var camisetasLayer;
var pantalonesLayer;

//crea el fondo pero no lo dibuja.
var fondo = new Konva.Rect({
  x:0,
  y:0,
  height:450,
  width:400,
  fill:'lightgrey'
});

//crea el cuerpo pero no lo dibuja.
var cabeza = new Konva.Circle({
    x: 200,
    y: 50,
    radius: 40,
    fill: 'rgb(48, 28, 28)'
  });

var cuerpo = new Konva.Rect({
  x:195,
  y:89,
  height:200,
  width:10,
  fill:'rgb(48, 28, 28)'
});

var brazoIzq = new Konva.Line({
  points:[100,130, 105,130, 195,145,195,150],
  stroke:'rgb(48, 28, 28)',
  strokeWidth: 10,
});

var brazoDer = new Konva.Line({
  points:[200,150, 200,145, 287,130, 292,130],
  stroke:'rgb(48, 28, 28)',
  strokeWidth:10
});

var piernaIzq = new Konva.Line({
  points:[100,334, 105,334, 195,284,195,289],
  stroke:'rgb(48, 28, 28)',
  strokeWidth:10
});

var piernaDer = new Konva.Line({
  points:[200,280, 200,284, 287,334, 292,334],
  stroke:'rgb(48, 28, 28)',
  strokeWidth:10
});

//añade el fondo, y el cuerpo a un layer, y lo dibuja en el stage
layer.add(fondo,cuerpo,cabeza,brazoIzq,brazoDer,piernaIzq,piernaDer)
stage.draw();

//funcion para vestir a Josep una vez elegido el pantalon y la camiseta
function drawJosep(camisetas,pantalones){
   camisetasLayer = new Konva.Layer();
  stage.add(camisetasLayer);
  pantalonesLayer = new Konva.Layer();
  stage.add(pantalonesLayer);

//dibuja las camisetas y los pantalones dependiendo de la eleccion del formulario
  if (camisetas === 'roja') {
    var camisetaRoja = new Konva.Line({
      points: [105,115,200,120,287,115,282,145,225,150,225,230,175,230,175,150,110,145],
      fill: 'darkred',
      closed: true,
    });
    camisetasLayer.add(camisetaRoja);
  }

  if (camisetas === 'rosa') {
    var camisetaRosa = new Konva.Line({
      points: [105,115,200,120,287,115,282,145,225,150,225,230,175,230,175,150,110,145],
      fill: 'pink',
      closed: true,
    });
    camisetasLayer.add(camisetaRosa);
  }

  if (camisetas === 'naranja') {
    var camisetaNaranja = new Konva.Line({
      points: [105,115,200,120,287,115,282,145,225,150,225,230,175,230,175,150,110,145],
      fill: 'orange',
      closed: true,
    });
    camisetasLayer.add(camisetaNaranja);
  }

   if (camisetas === 'morada') {
       var camisetaMorada = new Konva.Line({
      points:[105,115,200,120,287,115,282,145,225,150,225,230,175,230,175,150,110,145],
      fill: 'purple',
      closed: true,
    });
     camisetasLayer.add(camisetaMorada);
   }

   if (camisetas === 'azul') {
       var camisetaAzul = new Konva.Line({
       points: [105,115,200,120,287,115,282,145,225,150,225,230,175,230,175,150,110,145],
      fill: 'blue',
      closed: true,
    });
     camisetasLayer.add(camisetaAzul);
   }

   if (pantalones === 'azules') {
    var pantalonesAzul = new Konva.Line({
      points:[175,230,225,230,230,280,287,315,285,350,200,300,107,350,105,315,170,280],
      fill:'navy',
      closed:true
    });
     pantalonesLayer.add(pantalonesAzul)
  }

  if (pantalones === 'verde') {
   var pantalonesVerde = new Konva.Line({
     points:[175,230,225,230,230,280,287,315,285,350,200,300,107,350,105,315,170,280],
     fill:'darkGreen',
     closed:true
   });
    pantalonesLayer.add(pantalonesVerde)
 }

 if (pantalones === 'gris') {
  var pantalonesGris = new Konva.Line({
    points:[175,230,225,230,230,280,287,315,285,350,200,300,107,350,105,315,170,280],
    fill:'darkGrey',
    closed:true
  });
   pantalonesLayer.add(pantalonesGris)
}

  if (pantalones === 'negros') {
    var pantalonesNegro = new Konva.Line({
      points:[175,230,225,230,230,280,287,315,285,350,200,300,107,350,105,315,170,280],
      fill:'black',
      closed:true
    });
    pantalonesLayer.add(pantalonesNegro);
  }

  if (pantalones === 'blancos') {
    var pantalonesBlanco = new Konva.Line({
      points:[175,230,225,230,230,280,287,315,285,350,200,300,107,350,105,315,170,280],
      fill:'beige',
      closed:true
    });
    pantalonesLayer.add(pantalonesBlanco);
  }
}

//coge el valor del formulario y llama a la funcion de arriba para dibujarlo
function dibujarRopa() {
  var camisetas = document.getElementById('camisetas').value;
  var pantalones = document.getElementById('pantalones').value;
  drawJosep(camisetas, pantalones);
  stage.draw();
}

//borra la ropa a Josep
function borrarJosep() {
    stage.clear();
    stage.clear();
    pantalonesLayer.destroy();
    camisetasLayer.destroy();
    layer.add(fondo,cuerpo,cabeza,brazoIzq,brazoDer,piernaIzq,piernaDer)
    stage.draw();
}

//lsteners para los botones del formulario
document.getElementById('vestir').addEventListener('click', dibujarRopa);
document.getElementById('borrar').addEventListener('click', borrarJosep);
