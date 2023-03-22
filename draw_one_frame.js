var x=300;
var y=300;
var a=100;
var b=100;

function draw_one_frame() {
  //background(255);

  drawHexagon(250, 250, 100);


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
}

//function drawtriangle(x,y,r){
	//triangle(x, y, x+7*r, y-13.75*r, x+14*r, y);
//}

//function drawflower(i,k){
		//if(i%2==1){
		//	fill(255,(k*0.4)%255,30);
		//	stroke(k%255,255,0);
		//	arc(0,0,150+i+150*sin(k*PI/24),150,0,PI / 40);
		//}
		//else{
		//	fill(k%255,0,255);
		//	stroke(0,(k*0.4)%255,255);
		//	arc(0,0,(100+100*cos(k*PI/24))%255,50,0,PI / 20);
		//}
//}
