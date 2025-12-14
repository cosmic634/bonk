x = 375;
y = 250;

vx = 10;
vy = 0;

deltaVx = 0;
deltaVy = 0;

Fx = 0;
Fy = 0;
mass = 3.0;

dt = 0.1;

g = 9.8;
blob_radius = 25;

function draw(){

    // Update velocity
    vx += deltaVx;    
    vy += deltaVy;
   
    // Update location
    x += vx*dt;
    y += vy*dt;

    Fy = 0;
    if (keyIsDown(DOWN_ARROW)) {
        Fy = -15;
    }
    if (keyIsDown(UP_ARROW)) {
        Fy = 15;
    }
    Fnety = Fy - mass*g;  // why the extra step?
    ay = Fnety/mass;
    deltaVy = ay*dt;
  
    if ( (y - blob_radius < 0) & ( x > 0 ) & ( x < width ) ) {
       vy = -vy;
    }

    Fx = 0;
    if (keyIsDown(LEFT_ARROW)) {
	Fx = -15;
    }
    if (keyIsDown(RIGHT_ARROW)) {
	Fx = 15;
    }
    Fnetx = Fx;  // why the extra step?
    ax = Fnetx/mass;
    deltaVx = ax*dt;
    
    // Draw axes and other stuff
    // This will clear the screen and re-draw it
    display();

    drawForce(x,y,Fx,0);
    drawForce(x,y,0,-mass*g);
    drawForce(x,y,0,Fy);
    drawBlob(x,y,vx,vy,deltaVx/dt,deltaVy/dt,blob_radius);


    if (y < 0) {
     drawText('Game Over!',0.42*width,height/2); 
     noLoop();
     }


    // Add more graphics here before the end of draw()
 
} // end draw()
