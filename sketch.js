

function setup() {
    createCanvas(windowWidth,windowHeight);    
}

function draw() {
    background(0);
    let x = windowWidth;
    let y = windowHeight;


    //center
    fill(255);
    triangle(0,0,x/2, y,x,0);

    fill(0);
    triangle(x/12,0,x/2, x/2,x-x/12,0);

    fill(255);
    triangle(x/6,0,x/2, 5*x/12,x-x/6,0);

    fill(0);
    triangle(x/4,0,x/2, x/3,x-x/4,0);

    fill(255);
    triangle(x/3,0,x/2, x/4,x-x/3,0);

    fill(0);
    triangle(5*x/12,0,x/2, x/6,x-(5*x/12),0);

    // middle left to middle right
    noFill();
    strokeWeight(40);
    //red line
    stroke(255,0,0);
    beginShape();
    curveVertex(0,-40+y/2);
    curveVertex(0,-40+y/2);
    curveVertex(x/4,-40+y/4);
    curveVertex(x-x/3,-40+y-y/3);
    curveVertex(x,-40+y/3);
    curveVertex(x,-40+y/3);
    endShape();
    //orange line
    stroke('orange');
    beginShape();
    curveVertex(0,y/2);
    curveVertex(0,y/2);
    curveVertex(x/4,y/4);
    curveVertex(x-x/3,y-y/3);
    curveVertex(x,y/3);
    curveVertex(x,y/3);
    endShape();
    //yellow line
    stroke(255,255,0);
    beginShape();
    curveVertex(0,40+y/2);
    curveVertex(0,40+y/2);
    curveVertex(x/4,40+y/4);
    curveVertex(x-x/3,40+y-y/3);
    curveVertex(x,40+y/3);
    curveVertex(x,40+y/3);
    endShape();
    //green line
    stroke(0,255,0);
    beginShape();
    curveVertex(0,80+y/2);
    curveVertex(0,80+y/2);
    curveVertex(x/4,80+y/4);
    curveVertex(x-x/3,80+y-y/3);
    curveVertex(x,80+y/3);
    curveVertex(x,80+y/3);
    endShape();
    //aqua line
    stroke('aqua');
    beginShape();
    curveVertex(0,120+y/2);
    curveVertex(0,120+y/2);
    curveVertex(x/4,120+y/4);
    curveVertex(x-x/3,120+y-y/3);
    curveVertex(x,120+y/3);
    curveVertex(x,120+y/3);
    endShape();
    //purple line
    stroke(255,0,255);
    beginShape();
    curveVertex(0,160+y/2);
    curveVertex(0,160+y/2);
    curveVertex(x/4,160+y/4);
    curveVertex(x-x/3,160+y-y/3);
    curveVertex(x,160+y/3);
    curveVertex(x,160+y/3);
    endShape();
    //blue line
    stroke(0,0,255);
    beginShape();
    curveVertex(0,200+y/2);
    curveVertex(0,200+y/2);
    curveVertex(x/4,200+y/4);
    curveVertex(x-x/3,200+y-y/3);
    curveVertex(x,200+y/3);
    curveVertex(x,200+y/3);
    endShape();
    stroke(0);
    strokeWeight(1);
}