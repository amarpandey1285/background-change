
var r = 0;
var g = 50;
var b = 2;



function setup(){
  createCanvas(1200,400);
  background(50);
}


function draw(){

}

function keyPressed(){
 
  if(keyCode === 32){
    background(r,g,b);
    var rand = Math.round(random(r,b));
    switch(rand) {
      case 1: background(r);
           break;
      case 2: background(g);
           break;
      case 3: background(b);
           break;
      default: break;
    }
  }
    
}