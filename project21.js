var car, wall, speed, weight; 
var deformation = 0;
var showColor = "green";

function setup() {
  createCanvas(1600, 400);

	speed=random(55,90)
	weight=random(400,1500)

	car=createSprite(50, 200, 50,50);   

	car.velocityX = speed;

	car.shapeColor=color(255);
  
  	wall=createSprite(1500,200, 60, height/2)
  	wall.shapeColor=rgb(180,180,180)
}


function draw() {
  background(0);

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  	car.velocityX=0;
      deformation=0.5 * weight * speed* speed/22500;
      
	if(deformation>180)
	{
        car.shapeColor=rgb(255,0,0);
        showColor = "red";
	}

	if(deformation<180 && deformation>100)
	{
        car.shapeColor = rgb(230,230,0);
        showColor = "yellow";
	}

	if(deformation<100)
	{
        car.shapeColor=rgb(0,255,0);
        showColor = "green";
	}
  }  

  drawSprites();
    fill(showColor);
    textSize(20);
    text("Deformation = " + deformation, 100,40);
}