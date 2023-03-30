var x=300;
var y=300;
var a=100;
var b=100;

function draw_one_frame(cur_frac) {
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
let primaryLight = color("#00f2ff")
let secondaryLight = color ("#FF0059")
let hexColour = color("#202020")
let hexColourSmall = color("#131313")

noStroke();
//////////////////////////////////////////////////////
let noiseColour = getNoiseValue (0,0, 0.8, "noiseColour",0 ,1, 1)
let noisyColour;
let pixelSize =width / 10
let pixelSpacing =width / 50

for(let x = 0; x < width / pixelSpacing; x++){
    for(let y = 0; y < height / pixelSpacing; y++){

	noiseColour = getNoiseValue (pixelSpacing*x,pixelSpacing*y, cur_frac/ 2, "colour",0 ,1, 200)
	noisyColour = lerpColor(primaryLight,secondaryLight,noiseColour)
	fill(noisyColour)
	rect(pixelSpacing*x,pixelSpacing*y, pixelSize);


    moveXMap = map(cur_frac, 0, 1, pixelSpacing*x, pixelSize*(x+1))
    fill(noisyColour)
    rect(moveXMap,pixelSpacing*y, pixelSize) 
}
}

///////////////////////////////////////////////////////
// hexgrid settings
let hexSize = 70
let hexSizeSmall = 62
let x_spacing = 220
let y_spacing = 64

//fill(hexColour)
//let hexColour = color("#202020")



// draw a hexagonal grid
for(let x = 0; x < width / x_spacing; x++){
    for(let y = 0; y -1 < height / y_spacing; y++){
      let xPos = x_spacing * x;
      let yPos = y_spacing * y;
	  // add an offset to every second row
      if (y % 2 == 1) { 
        xPos += x_spacing / 2;
      }
      fill(hexColour)
      stroke(0)
      drawHexagon(xPos, yPos, hexSize);

      fill(hexColourSmall)
      noStroke()
      drawHexagon(xPos, yPos, hexSizeSmall);
    }
  }
}
