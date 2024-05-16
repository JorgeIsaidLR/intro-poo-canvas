const canvasOPP = document.getElementById("canvasOPP");
const canvasrandom = document.getElementById("canvasrandom");
const canvasmultiple = document.getElementById("canvasmultiple");

const ctx = canvasOPP.getContext("2d");
const ctxrandom = canvasrandom.getContext("2d");
const ctxmultiple = canvasmultiple.getContext("2d");

/*const window_height = window.innerHeight;

const window_width = window.innerWidth; */
// SACA EL ALTO DE LA PNATALLA Y ANCHO

canvasOPP.height = "200";//window_height;
canvasOPP.width = "300";//window_width;

canvasrandom.height = "200";//window_height;
canvasrandom.width = "300";//window_width;

canvasmultiple.height = "200";//window_height;
canvasmultiple.width = "300";//window_width;

canvasOPP.style.background = "#ff8";
canvasrandom.style.background = "#8888ff";
canvasmultiple.style.background = "#88ff88";

class Circle {

  constructor(x, y, radius, color, text, backcolor) {

    this.posX = x;

    this.posY = y;

    this.radius = radius;

    this.color = color;

    this.text = text;
    // constructir que carga los valores predeterminados del objeto
    this.backcolor = backcolor;
  }

  // Metodo para renderizar el objeto  (dibujar Draw)
  draw(context) {
    //rellena el objeto
    context.beginPath();
    context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.backcolor;
    context.fill();

    //Dibuja la linea del objeto
    context.lineWidth = 2;
    context.strokeStyle = this.color;
    context.stroke();
    context.closePath();

    context.fillStyle = 'white';
    context.textAlign = "center"; // alineacion orizontal 
    context.textBaseline = "middle"; // alineacion vertizal 
    context.font = "bold 20px arial"; // tipo de letra solamente 
    // Renderiza el texto en el centro del objeto 
    context.fillText(this.text, this.posX, this.posY); // Texto que se va a dibujar, en una cordenada

    //Dibuja la linea del objeto
    // ancho de linea

    // context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);


    //context.closePath();

  }

}

function getRandomCircleParams(canvasWidth, canvasHeight, maxRadius) {
  const radius = Math.floor(Math.random() * (maxRadius - 10) + 10);
  const x = Math.random() * (canvasWidth - 2 * radius) + radius;
  const y = Math.random() * (canvasHeight - 2 * radius) + radius;
  return { x, y, radius };
}



/* PARAMETROS AGREGADOS DENTRO DE NUEVA FUCIION EN RANDOM
let randomX = Math.random() * canvasOPP.width;
let randomY = Math.random() * canvasOPP.height;
let randomRadius = Math.floor(Math.random() * 100 + 30);
*/

//paso 1
// let miCirculo = new Circle(randomX, randomY, randomRadius, 'red', 'Tec');

//paso 2
//let miCirculo = new Circle(canvasOPP.height / 2, canvasOPP.width / 2, 50, 'red', 'Tec', "rgb(66,135,245)");
//let miCirculoramdom = new Circle(randomX, randomY, randomRadius, 'red', 'Tec', "rgb(66,135,245)");

let miCirculo = new Circle(canvasOPP.width / 2, canvasOPP.height / 2, 50, 'red', 'Tec', "rgb(66,135,245)");
miCirculo.draw(ctx);


//let miCirculoramdom = new Circle(randomX, randomY, randomRadius, 'red', 'Tec', "rgb(66,135,245)");
let { x: randomX, y: randomY, radius: randomRadius } = getRandomCircleParams(canvasrandom.width, canvasrandom.height, 100);
let miCirculoramdom = new Circle(randomX, randomY, randomRadius, 'red', 'Tec', "rgb(66,135,245)");



miCirculoramdom.draw(ctxrandom);



/*
let arrayCircle = [];
for (let i = 0; i < 10; i++) {

  let randomX = Math.random() * canvasmultiple.width;

  let randomY = Math.random() * canvasmultiple.height;

  let randomRadius = Math.floor(Math.random() * 10 + 30);


  let miCirculomultiple = new Circle(randomX, randomY, randomRadius, "blue", i + 1,"rgb(66,135,245)");
  arrayCircle.push(miCirculomultiple);
  arrayCircle[i].draw(ctxmultiple);

} */

let arrayCircle = [];
for (let i = 0; i < 10; i++) {
  let { x, y, radius } = getRandomCircleParams(canvasmultiple.width, canvasmultiple.height, 40);
  let miCirculomultiple = new Circle(x, y, radius, "blue", (i + 1).toString(), "rgb(66,135,245)");
  arrayCircle.push(miCirculomultiple);
  arrayCircle[i].draw(ctxmultiple);
}