var angle = 0.0;

function setup() {
  createCanvas(1200,1200);
  background(0);
  
}

function draw() {
translate(mouseX,mouseY);
rotate(angle);
circle(100,100,50);
var d=random(70, 150);
for (var i=0; i<5; i++){
  fill(random(50,255), random(50,255), random(50,255));
   if (mouseIsPressed){
    var x=mouseX;
    var y=mouseY;    
    ellipse(0,-40,d,d);
   rotate(radians(75));
   fill(color(random(50,255),random(50,255),random(50,255)));//face color

ellipse(0,0,d*1.15,d*1.15);//face
  fill(255,20,90);//eye color
 ellipse(10,-4,8,12);//eye
 ellipse(-10,-4,8,12);//eye
 arc(0,20,18,15,0,3.14);//mouth
 line(-10,20,10,20);//mouth
  }
}
angle += 0.1;
}



