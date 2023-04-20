var r=0;

var x;
var y;

function setup(){
    createCanvas(720,480);
    x=100;
    y=100;
}

function draw(){
    background(r,255,0);//this sets the background
  /*
  multline comment
  */
    r=r+1;
    r=r%255;//modulo operator

    x=x+1;
    y=y+1;
    
    x=x%720;
    y=y%480;

    circle(x,y,100);

}
