var x=300;
var y=300;
var a=100;
var b=100;

function draw_one_frame() {
  background(255);
//////////////////////////////////////////////////
  //drawHexagon(100, 100, 70);
function drawHexagon(x, y, radius) {
  beginShape();
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i;
    let px = x + cos(angle) * radius;
    let py = y + sin(angle) * radius;
    vertex(px, py);
  }
  endShape(CLOSE);
}
////////////////////////////////////////////////////
//let primary = colour(afafa)
//let secondary = colour (sawg)
let hexColour = color("#202020")


//let noiseColour = getNoiseValue (0,0, 0.8, "colour",0 ,1, 1)
//let noisyColour;

//let pixelSize =width / 1
//let pixelSpacing =width / 100


//for(let x = 0; x < width / pixelSpacing; x++){
    //for(let y = 0; y < height / pixelSpacing; y++){
	//noiseColour = getNoiseValue (pixelSpacing*x,pixelSpacing*y, 0.8, "colour",0 ,1, 1)
	//noisyColour = lerpColour(primary,secondary)
	//fill(noisyColour)
	//rect(pixelSpacing*x,pixelSpacing*y, pixelSize);
//}
//}








///////////////////////////////////////////////////////
let hexSize = 70
let x_spacing = 220
let y_spacing = 64

fill(hexColour)


for(let x = 0; x < width / x_spacing; x++){
    for(let y = 0; y -1 < height / y_spacing; y++){
      let xPos = x_spacing * x;
      let yPos = y_spacing * y;

	  // add an offset to every second row
      if (y % 2 == 1) { 
        xPos += x_spacing / 2;
      }
      drawHexagon(xPos, yPos, hexSize);
    }
  }
}